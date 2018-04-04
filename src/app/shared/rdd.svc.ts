/**
 * RandomDataGenerator
 */
export const RandomData = {
  /**
   * Generate random numbers data
   * pass columns definitions array
   * @param columns:array of col object
   * @param records:number, how many records to generate
   */
  generate: (columns, records)=>{
    let data={
      columns: columns,
      records:[]
    }
    //loop required amount of records
    for (let r=0; r < records; r++){
      let rec={}, val;
      columns.map((c)=>{
        //generate single value
        switch(c.type.toLowerCase()){
          case "string":
            val = RandomData.generateRandomString();
            break;
          case "date":
            val = RandomData.generateRandomDate();
            break;
          case "float":
          case "integer":
          default:
            val = RandomData.generateRandomNumber();
        }
        //add column to record
        rec[c.id]=val;
      });
      //add records to collection
      data.records.push(rec);
    }
    //return data back
    return data;
  },
  generateRandomString: (len=2)=> {
    return Math.random().toString(36).substring(len);
  },
  generateRandomDate: ()=>{
    return new Date(
      + (new Date()) - Math.floor(Math.random()*1000000000000)
    ).toISOString();
  },
  generateRandomNumber: ()=>{
    return Math.random() * 100000;
  }
}
