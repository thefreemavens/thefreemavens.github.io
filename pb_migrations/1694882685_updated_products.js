/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eswh3jlrjqht84n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vzdjygae",
    "name": "product_color",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eswh3jlrjqht84n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vzdjygae",
    "name": "Color",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
