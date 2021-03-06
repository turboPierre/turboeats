define({ "api": [
  {
    "type": "delete",
    "url": "/Command/",
    "title": "DELETE Command information",
    "name": "DeleteCommand",
    "group": "Command",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Command unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The id of the Command was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Command Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/command.router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/Command/",
    "title": "GET Command information",
    "name": "GetCommand",
    "group": "Command",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Command unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_clientId",
            "description": "<p>Id_user to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_delivererId",
            "description": "<p>Id_deliverer to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_menuId",
            "description": "<p>all id_ of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Name Command\",\n    \"price\": \"25\",\n    \"_clientId\": \"1334\",\n    \"_restaurantId\": \"0640404040\",\n    \"_delivererId\": \"06465\",\n    \"_menuId\": \"{\"id\":\"1313\"}\",\n    \"_productId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The id of the Command was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Command Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/command.router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/Command/",
    "title": "GET History Delivered Command",
    "name": "GetCommand",
    "group": "Command",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Command unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_clientId",
            "description": "<p>Id_user to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_delivererId",
            "description": "<p>Id_deliverer to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_menuId",
            "description": "<p>all id_ of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Name Command\",\n    \"price\": \"25\",\n    \"_clientId\": \"1334\",\n    \"_restaurantId\": \"0640404040\",\n    \"_delivererId\": \"06465\",\n    \"_menuId\": \"{\"id\":\"1313\"}\",\n    \"_productId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The id of the Command was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Command Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/command.router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/Command/",
    "title": "GET User Command information",
    "name": "GetCommand",
    "group": "Command",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Command unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_clientId",
            "description": "<p>Id_user to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_delivererId",
            "description": "<p>Id_deliverer to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_menuId",
            "description": "<p>all id_ of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Name Command\",\n    \"price\": \"25\",\n    \"_clientId\": \"1334\",\n    \"_restaurantId\": \"0640404040\",\n    \"_delivererId\": \"06465\",\n    \"_menuId\": \"{\"id\":\"1313\"}\",\n    \"_productId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The id of the Command was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Command Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/command.router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/Command/",
    "title": "GET Restaurant Command information",
    "name": "GetCommand",
    "group": "Command",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Command unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_clientId",
            "description": "<p>Id_user to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_delivererId",
            "description": "<p>Id_deliverer to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_menuId",
            "description": "<p>all id_ of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Name Command\",\n    \"price\": \"25\",\n    \"_clientId\": \"1334\",\n    \"_restaurantId\": \"0640404040\",\n    \"_delivererId\": \"06465\",\n    \"_menuId\": \"{\"id\":\"1313\"}\",\n    \"_productId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The id of the Command was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Command Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/command.router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/Command/",
    "title": "GET Specific Command information",
    "name": "GetCommand",
    "group": "Command",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Command unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_clientId",
            "description": "<p>Id_user to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_delivererId",
            "description": "<p>Id_deliverer to the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_menuId",
            "description": "<p>all id_ of the Command.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Name Command\",\n    \"price\": \"25\",\n    \"_clientId\": \"1334\",\n    \"_restaurantId\": \"0640404040\",\n    \"_delivererId\": \"06465\",\n    \"_menuId\": \"{\"id\":\"1313\"}\",\n    \"_productId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The id of the Command was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Command Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/command.router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "post",
    "url": "/Command/",
    "title": "POST Command information",
    "name": "PostCommand",
    "group": "Command",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_clientId",
            "description": "<p>Id_user to the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_delivererId",
            "description": "<p>Id_deliverer to the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_menuId",
            "description": "<p>all id_ of the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Command.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The id of the Command was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Command Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/command.router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "put",
    "url": "/Command/",
    "title": "PUT Command information",
    "name": "PutCommand",
    "group": "Command",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_clientId",
            "description": "<p>Id_user to the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_delivererId",
            "description": "<p>Id_deliverer to the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_menuId",
            "description": "<p>all id_ of the Command.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Command.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommandNotFound",
            "description": "<p>The id of the Command was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Command Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/command.router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "delete",
    "url": "/Menu/",
    "title": "DELETE Menu information",
    "name": "DeleteMenu",
    "group": "Menu",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>The id of the Menu was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Menu Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/menu.router.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/Menu/",
    "title": "GET Menu information",
    "name": "GetMenu",
    "group": "Menu",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Menu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Menu Name\",\n    \"price\": \"25\",\n    \"describe\": \"Description of the menu\",\n    \"picture\": \"http://exemple.com\",\n    \"_restaurantId\": \"{\"id\":\"1234\"}\",\n    \"_productId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>The id of the Menu was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Menu Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/menu.router.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/Menu/",
    "title": "GET Specific Menu information",
    "name": "GetMenu",
    "group": "Menu",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Menu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Menu Name\",\n    \"price\": \"25\",\n    \"describe\": \"Description of the menu\",\n    \"picture\": \"http://exemple.com\",\n    \"_restaurantId\": \"{\"id\":\"1234\"}\",\n    \"_productId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>The id of the Menu was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Menu Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/menu.router.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/Menu/",
    "title": "GET Specific Restaurant Menu information",
    "name": "GetMenu",
    "group": "Menu",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Menu unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Menu.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Menu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Menu Name\",\n    \"price\": \"25\",\n    \"describe\": \"Description of the menu\",\n    \"picture\": \"http://exemple.com\",\n    \"_restaurantId\": \"{\"id\":\"1234\"}\",\n    \"_productId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>The id of the Menu was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Menu Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/menu.router.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "post",
    "url": "/Menu/",
    "title": "POST Specific Restaurant Menu information",
    "name": "PostMenu",
    "group": "Menu",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Menu.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>The id of the Menu was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Menu Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/menu.router.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "put",
    "url": "/Menu/",
    "title": "PUT Specific Menu information",
    "name": "PutMenu",
    "group": "Menu",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Menu.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_productId",
            "description": "<p>all id_product of of the Menu.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>The id of the Menu was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Menu Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/menu.router.ts",
    "groupTitle": "Menu"
  },
  {
    "type": "delete",
    "url": "/Product/",
    "title": "DELETE Product information",
    "name": "DeleteProduct",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Product.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Product Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/product.router.ts",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/Product/",
    "title": "GET Product information",
    "name": "GetProduct",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Product Name\",\n    \"price\": \"25\",\n    \"describe\": \"Description of the product\",\n    \"picture\": \"http://exemple.com\",\n    \"_restaurantId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Product Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/product.router.ts",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/Product/",
    "title": "GET Product information",
    "name": "GetProduct",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Product Name\",\n    \"price\": \"25\",\n    \"describe\": \"Description of the product\",\n    \"picture\": \"http://exemple.com\",\n    \"_restaurantId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Product Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/product.router.ts",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/Product/",
    "title": "GET Product information",
    "name": "GetProduct",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Product Name\",\n    \"price\": \"25\",\n    \"describe\": \"Description of the product\",\n    \"picture\": \"http://exemple.com\",\n    \"_restaurantId\": \"{\"id\":\"1234\"}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Product Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/product.router.ts",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/Product/",
    "title": "POST Product information",
    "name": "PostProduct",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Product.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Product Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/product.router.ts",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/Product/",
    "title": "PUT Product information",
    "name": "PutProduct",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "_restaurantId",
            "description": "<p>Id_restaurant of the Product.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Product Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/product.router.ts",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/Restaurant/",
    "title": "DELETE Specific Restaurant information",
    "name": "DeleteRestaurant",
    "group": "Restaurant",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Restaurant Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/restaurant.router.ts",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/Restaurant/",
    "title": "GET All Restaurant",
    "name": "GetRestaurant",
    "group": "Restaurant",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "open_hour",
            "description": "<p>Hour open of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "close_hour",
            "description": "<p>Hour close of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "open_days",
            "description": "<p>Days open of the Restaurant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Restaurant Name\",\n    \"describe\": \"Description of the Restaurant\",\n    \"picture\": \"http://exemple.com\",\n    \"address\": \"Restaurant Address 123 road of exemple\",\n    \"phone\": \"1234\",\n    \"open_hour\": \"12\",\n    \"close_hour\": \"24\",\n    \"open_days\": \"all the days\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Restaurant Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/restaurant.router.ts",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/Restaurant/",
    "title": "GET Unique Restaurant information",
    "name": "GetRestaurant",
    "group": "Restaurant",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "open_hour",
            "description": "<p>Hour open of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "close_hour",
            "description": "<p>Hour close of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "open_days",
            "description": "<p>Days open of the Restaurant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Restaurant Name\",\n    \"describe\": \"Description of the Restaurant\",\n    \"picture\": \"http://exemple.com\",\n    \"address\": \"Restaurant Address 123 road of exemple\",\n    \"phone\": \"1234\",\n    \"open_hour\": \"12\",\n    \"close_hour\": \"24\",\n    \"open_days\": \"all the days\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Restaurant Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/restaurant.router.ts",
    "groupTitle": "Restaurant"
  },
  {
    "type": "get",
    "url": "/Restaurant/",
    "title": "GET Specific Restaurant information",
    "name": "GetRestaurant",
    "group": "Restaurant",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "open_hour",
            "description": "<p>Hour open of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "close_hour",
            "description": "<p>Hour close of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "open_days",
            "description": "<p>Days open of the Restaurant.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"name\": \"Restaurant Name\",\n    \"describe\": \"Description of the Restaurant\",\n    \"picture\": \"http://exemple.com\",\n    \"address\": \"Restaurant Address 123 road of exemple\",\n    \"phone\": \"1234\",\n    \"open_hour\": \"12\",\n    \"close_hour\": \"24\",\n    \"open_days\": \"all the days\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Restaurant Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/restaurant.router.ts",
    "groupTitle": "Restaurant"
  },
  {
    "type": "post",
    "url": "/Restaurant/",
    "title": "POST Restaurant information",
    "name": "PostRestaurant",
    "group": "Restaurant",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "open_hour",
            "description": "<p>Hour open of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "close_hour",
            "description": "<p>Hour close of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "open_days",
            "description": "<p>Days open of the Restaurant.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Restaurant Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/restaurant.router.ts",
    "groupTitle": "Restaurant"
  },
  {
    "type": "put",
    "url": "/Restaurant/",
    "title": "PUT Restaurant information",
    "name": "PutRestaurant",
    "group": "Restaurant",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>Describe of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Link url tothe picture of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "open_hour",
            "description": "<p>Hour open of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "close_hour",
            "description": "<p>Hour close of the Restaurant.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "open_days",
            "description": "<p>Days open of the Restaurant.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Restaurant Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/restaurant.router.ts",
    "groupTitle": "Restaurant"
  },
  {
    "type": "delete",
    "url": "/user/",
    "title": "DELETE User information",
    "name": "DeleteUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/user.router.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "GET Request User information",
    "name": "GetUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passeword of of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>User act.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"firstName\": \"Joe\",\n    \"lastName\": \"Mason\",\n    \"email\": \"Joe.Masson@test.fr\",\n    \"phone\": \"0640404040\",\n    \"password\": \"string205\",\n    \"address\": \"80 rue des moussons\",\n    \"role\": \"livreur\",\n    \"active\": \"vrai\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/user.router.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "GET all User information",
    "name": "GetUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passeword of of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>User act.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"123\",\n    \"firstName\": \"Joe\",\n    \"lastName\": \"Mason\",\n    \"email\": \"Joe.Masson@test.fr\",\n    \"phone\": \"0640404040\",\n    \"password\": \"string205\",\n    \"address\": \"80 rue des moussons\",\n    \"role\": \"livreur\",\n    \"active\": \"vrai\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/user.router.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "POST Register User information",
    "name": "PostUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passeword of of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>User act.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/user.router.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "POST login User information",
    "name": "PostUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passeword of of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>User act.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/user.router.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/",
    "title": "PUT Request User information",
    "name": "PutUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passeword of of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>User act.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routers/user.router.ts",
    "groupTitle": "User"
  }
] });
