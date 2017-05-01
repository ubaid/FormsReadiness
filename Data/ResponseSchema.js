{
  "definitions": {
    "ValidationRule": {
      "type": [
        "object",
        "null"
      ],
      "properties": {
        "Type": {
          "type": "string",
          "enum": [
            "CharacterLimit",
            "DateRange"
          ]
        },
        "Values": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "type": [
              "string",
              "null"
            ]
          }
        }
      },
      "required": [
        "Type",
        "Values"
      ]
    },
    "Question": {
      "type": [
        "object",
        "null"
      ],
      "properties": {
        "QuestionId": {
          "type": "string"
        },
        "Type": {
          "type": "string",
          "enum": [
            "Text",
            "Choices",
            "UniqueChoice",
            "List"
          ]
        },
        "Text": {
          "type": "string"
        },
        "HelpText": {
          "type": [
            "string",
            "null"
          ]
        },
        "IsAnswerRequired": {
          "type": "boolean"
        },
        "ValidationRules": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/definitions/ValidationRule"
          }
        },
        "Options": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "type": [
              "string",
              "null"
            ]
          }
        }
      },
      "required": [
        "QuestionId",
        "Type",
        "Text",
        "HelpText",
        "IsAnswerRequired",
        "ValidationRules",
        "Options"
      ]
    }
  },
  "type": "object",
  "properties": {
    "FormId": {
      "type": "string"
    },
    "Title": {
      "type": "string"
    },
    "Description": {
      "type": [
        "string",
        "null"
      ]
    },
    "CreatedOn": {
      "type": "string"
    },
    "ModifiedOn": {
      "type": "string"
    },
    "CreatedBy": {
      "type": "string"
    },
    "ExpiresOn": {
      "type": "string"
    },
    "Questions": {
      "type": [
        "array",
        "null"
      ],
      "items": {
        "$ref": "#/definitions/Question"
      }
    }
  },
  "required": [
    "FormId",
    "Title",
    "Description",
    "CreatedOn",
    "ModifiedOn",
    "CreatedBy",
    "ExpiresOn",
    "Questions"
  ]
}