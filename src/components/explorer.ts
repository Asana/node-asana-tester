import build = require("./build");
import react = require("react");
import TypedReact = require("typed-react");

import AuthorizedClient = require("../authorized_client");
import JsonResponse = require("./json_response");
import RouteEntry = require("./route_entry");

var r = react.DOM;

export interface Props {
  initialAuthorizedClient?: AuthorizedClient;
  initial_route?: string;
}

export interface State {
  authorizedClient?: AuthorizedClient;
  route?: string;
  response?: any;
}

/**
 * The main API Explorer component.
 */
export class Component extends TypedReact.Component<Props, State> {
  getInitialState() {
    // If a client exists in props, use it. Otherwise, make a new one.
    var authorizedClient =
      this.props.initialAuthorizedClient || new AuthorizedClient();

    return {
      authorizedClient: authorizedClient,
      route: this.props.initial_route || "/users/me"
    };
  }

  /**
   * Authorize the client, if it has expired, and force a re-rendering.
   */
  authorize() {
    this.state.authorizedClient.authorizeIfExpired().then(function() {
      if (this.isMounted()) {
        this.forceUpdate();
      }
    }.bind(this));
  }

  /**
   * Updates the route state following an onChange event.
   */
  onChangeRouteState(event: React.FormEvent) {
    this.setState({
      route: (<HTMLInputElement>event.target).value
    });
  }

  /**
   * Send a get request to the API using the current state's route, and
   * update the state after receiving a response.
   */
  onSubmitRequest(event: React.FormEvent) {
    event.preventDefault();

    var route = this.state.route;

    this.state.authorizedClient.get(route).then(function(response: any) {
      this.setState({
        response: response
      });
    }.bind(this));
  }

  render() {
    if (!this.state.authorizedClient.isAuthorized()) {
      return r.a({
        className: "authorize-link",
        href: "#",
        onClick: this.authorize
      }, "Click to authorize!");
    } else {
      return r.div({
        className: "api-explorer",
        children: [
          RouteEntry.create({
            route: this.state.route,
            onFormSubmit: this.onSubmitRequest,
            onRouteChange: this.onChangeRouteState
          }),
          JsonResponse.create({
            response: this.state.response
          })
        ]
      });
    }
  }
}

export var create = build(Component);
