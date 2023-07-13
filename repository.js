class Repository {
  delete(id){
    console.log(`Delete ${id}`);
  }

  getById(id){
    console.log(`Get item by id ${id}`);
  }

  create(item){
    console.log(item);
    return 0;
  }
}

module.exports = Repository;
