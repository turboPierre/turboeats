define({ "api": [
  {
    "type": "delete",
    "url": "/Command/:id",
    "title": "DELETE Command",
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
    "filename": "src/routers/router.ts",
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
    "filename": "src/routers/router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/Command/:id",
    "title": "GET unique Command information",
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
    "filename": "src/routers/router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "post",
    "url": "/Command/",
    "title": "POST Command",
    "name": "postCommand",
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
    "filename": "src/routers/router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "post",
    "url": "/Command/:id",
    "title": "POST unique Command",
    "name": "postCommand",
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
    "filename": "src/routers/router.ts",
    "groupTitle": "Command"
  },
  {
    "type": "delete",
    "url": "/Menu/:id",
    "title": "DELETE unique Menu information",
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
    "url": "/Menu/:id",
    "title": "GET unique Menu information",
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
    "title": "POST Menu information",
    "name": "PostMenu",
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
    "type": "put",
    "url": "/Menu/:id",
    "title": "PUT Menu information",
    "name": "PostMenu",
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
    "type": "delete",
    "url": "/Product/:id",
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
    "url": "/Product/:id",
    "title": "GET unique Product information",
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
    "type": "put",
    "url": "/Product/:id",
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
    "type": "delete",
    "url": "/Restaurant/:id",
    "title": "DELETE Restaurant information",
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
    "title": "GET Restaurant information",
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
    "url": "/Restaurant/:id",
    "title": "GET unique Restaurant information",
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
    "type": "put",
    "url": "/Restaurant/:id",
    "title": "PUT Restaurant information",
    "name": "PutRestaurant",
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
  }
] });
