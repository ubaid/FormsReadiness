{
  "FormId": "900d7836-8a04-4315-962f-e76c1f321f05",
  "Title": "Test Form",
  "Description": "This is test form.",
  "CreatedOn": "2017-05-01T12:26:53.6859149+00:00",
  "ModifiedOn": "0001-01-01T00:00:00+00:00",
  "CreatedBy": "ubaid.tahir@forms.com",
  "ExpiresOn": "2017-05-08T12:26:53.6859149+00:00",
  "Questions": [
    {
      "QuestionId": "7ad7c5b3-4822-4dfe-add4-d1899c5da839",
      "Type": "Text",
      "Text": "Please enter your DOB",
      "HelpText": "Just to identify your age group.",
      "IsAnswerRequired": false,
      "ValidationRules": [
        {
          "Type": "DateRange",
          "Values": [
            "GreaterThan 01011980"
          ]
        }
      ],
      "Options": null
    },
    {
      "QuestionId": "41236be1-3fb9-4f00-bbf7-8d6a0b255b72",
      "Type": "Text",
      "Text": "Enter your full name.",
      "HelpText": "",
      "IsAnswerRequired": true,
      "ValidationRules": null,
      "Options": null
    },
    {
      "QuestionId": "1c517403-115d-4e51-b444-2dc56d17c5d0",
      "Type": "UniqueChoice",
      "Text": "Are you a girl or a boy?",
      "HelpText": "To give you better suggestions...",
      "IsAnswerRequired": true,
      "ValidationRules": null,
      "Options": [
        "Boy",
        "Girl"
      ]
    }
  ]
}