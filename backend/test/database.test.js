const {testDatabaseConection} = require("../interfaces/db/database")

test('Connection has been established successfully to DB',async  () => {
    expect( await testDatabaseConection()).toBe(true);
  });

  

