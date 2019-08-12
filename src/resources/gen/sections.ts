/// <reference path="../interfaces.ts" />

/**
 * This file is auto-generated by the `asana-api-meta` NodeJS package.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing.
 */
/* tslint:disable:max-line-length */
/* tslint:disable:eofline */
var resource = <Resource>{
  "name": "section",
  "comment": "A _section_ is a subdivision of a project that groups tasks together. It can\neither be a header above a list of tasks in a list view or a column in a\nboard view of a project.\n",
  "notes": [
    "Sections are largely a shared idiom in Asana's API for both list and board\nviews of a project regardless of the project's layout.\n\nThe 'memberships' property when [getting a\ntask](/developers/api-reference/tasks#get) will return the information for\nthe section or the column under 'section' in the response.\n"
  ],
  "properties": [
    {
      "name": "id",
      "type": "Id",
      "example_values": [
        "1234"
      ],
      "access": "Read-only",
      "comment": "Globally unique ID of the section.\n**Note: This field is under active migration to the [`gid` field](#field-gid)--please see our [blog post](/developers/documentation/getting-started/deprecations) for more information.**\n"
    },
    {
      "name": "gid",
      "type": "Gid",
      "example_values": [
        "\"1234\""
      ],
      "access": "Read-only",
      "comment": "Globally unique ID of the section.\n"
    },
    {
      "name": "resource_type",
      "type": "Enum",
      "access": "Read-only",
      "comment": "The resource type of this resource. The value for this resource is always `section`.\n",
      "example_values": [
        "\"section\""
      ],
      "values": [
        {
          "name": "section",
          "comment": "A section resource type."
        }
      ]
    },
    {
      "name": "name",
      "type": "String",
      "example_values": [
        "'Next Actions'"
      ],
      "comment": "The name of the section (i.e. the text displayed as the section header).\n"
    },
    {
      "name": "project",
      "type": "Project",
      "example_values": [
        "{ id: 1234, gid: \"1234\", name: 'Bugs' }"
      ],
      "access": "Read-only",
      "comment": "The project which contains the section.\n"
    },
    {
      "name": "created_at",
      "type": "String",
      "example_values": [
        "'2012-02-22T02:06:58.147Z'"
      ],
      "access": "Read-only",
      "comment": "The time at which the section was created.\n"
    }
  ],
  "action_classes": [
    {
      "name": "Create a section",
      "url": "create"
    },
    {
      "name": "Get sections in a project",
      "url": "find-project"
    },
    {
      "name": "Get a single section",
      "url": "get-single"
    },
    {
      "name": "Update a section",
      "url": "update"
    },
    {
      "name": "Delete a section",
      "url": "delete"
    },
    {
      "name": "Move a section in a project",
      "url": "reorder"
    }
  ],
  "actions": [
    {
      "name": "createInProject",
      "class": "create",
      "method": "POST",
      "path": "/projects/%s/sections",
      "params": [
        {
          "name": "project",
          "type": "Gid",
          "example_values": [
            "\"13579\""
          ],
          "comment": "The project to create the section in",
          "required": true
        },
        {
          "name": "name",
          "type": "String",
          "comment": "The text to be displayed as the section name. This cannot be an empty string.",
          "example_values": [
            "'Next Actions'"
          ],
          "required": true
        }
      ],
      "comment": "Creates a new section in a project.\n\nReturns the full record of the newly created section.\n"
    },
    {
      "name": "findByProject",
      "class": "find-project",
      "method": "GET",
      "path": "/projects/%s/sections",
      "params": [
        {
          "name": "project",
          "type": "Gid",
          "example_values": [
            "\"13579\""
          ],
          "comment": "The project to get sections from.",
          "required": true
        }
      ],
      "collection": true,
      "comment": "Returns the compact records for all sections in the specified project.\n"
    },
    {
      "name": "findById",
      "class": "get-single",
      "method": "GET",
      "path": "/sections/%s",
      "params": [
        {
          "name": "section",
          "type": "Gid",
          "example_values": [
            "\"97531\""
          ],
          "comment": "The section to get.",
          "required": true
        }
      ],
      "comment": "Returns the complete record for a single section.\n"
    },
    {
      "name": "update",
      "class": "update",
      "method": "PUT",
      "path": "/sections/%s",
      "params": [
        {
          "name": "section",
          "type": "Gid",
          "example_values": [
            "\"97531\""
          ],
          "comment": "The section to update.",
          "required": true
        }
      ],
      "comment": "A specific, existing section can be updated by making a PUT request on\nthe URL for that project. Only the fields provided in the `data` block\nwill be updated; any unspecified fields will remain unchanged. (note that\nat this time, the only field that can be updated is the `name` field.)\n\nWhen using this method, it is best to specify only those fields you wish\nto change, or else you may overwrite changes made by another user since\nyou last retrieved the task.\n\nReturns the complete updated section record.\n"
    },
    {
      "name": "delete",
      "class": "delete",
      "method": "DELETE",
      "path": "/sections/%s",
      "params": [
        {
          "name": "section",
          "type": "Gid",
          "example_values": [
            "\"97531\""
          ],
          "comment": "The section to delete.",
          "required": true
        }
      ],
      "comment": "A specific, existing section can be deleted by making a DELETE request\non the URL for that section.\n\nNote that sections must be empty to be deleted.\n\nThe last remaining section in a board view cannot be deleted.\n\nReturns an empty data block.\n"
    },
    {
      "name": "addTask",
      "class": "reorder",
      "method": "POST",
      "path": "/sections/%s/addTask",
      "params": [
        {
          "name": "task",
          "type": "Gid",
          "example_values": [
            "\"124816\""
          ],
          "comment": "The task to add to this section",
          "required": true
        },
        {
          "name": "insert_before",
          "type": "Gid",
          "example_values": [
            "\"12345\""
          ],
          "comment": "Insert the given task immediately before the task specified by this parameter. Cannot be provided together with `insert_after`."
        },
        {
          "name": "insert_after",
          "type": "Gid",
          "example_values": [
            "\"12345\""
          ],
          "comment": "Insert the given task immediately after the task specified by this parameter. Cannot be provided together with `insert_before`."
        }
      ],
      "comment": "Add a task to a specific, existing section. This will remove the task from other sections of the project.\n\nThe task will be inserted at the top of a section unless an `insert_before` or `insert_after` parameter is declared.\n\nThis does not work for separators (tasks with the `resource_subtype` of section).\n"
    },
    {
      "name": "insertInProject",
      "class": "reorder",
      "method": "POST",
      "path": "/projects/%s/sections/insert",
      "params": [
        {
          "name": "project",
          "type": "Gid",
          "example_values": [
            "\"13579\""
          ],
          "comment": "The project in which to reorder the given section",
          "required": true
        },
        {
          "name": "section",
          "type": "Gid",
          "example_values": [
            "\"97531\""
          ],
          "comment": "The section to reorder",
          "required": true
        },
        {
          "name": "before_section",
          "type": "Gid",
          "example_values": [
            "86420"
          ],
          "comment": "Insert the given section immediately before the section specified by this parameter.",
          "required": false
        },
        {
          "name": "after_section",
          "type": "Gid",
          "example_values": [
            "86420"
          ],
          "comment": "Insert the given section immediately after the section specified by this parameter.",
          "required": false
        }
      ],
      "comment": "Move sections relative to each other in a board view. One of\n`before_section` or `after_section` is required.\n\nSections cannot be moved between projects.\n\nAt this point in time, moving sections is not supported in list views, only board views.\n\nReturns an empty data block.\n"
    }
  ]
};
export = resource;
