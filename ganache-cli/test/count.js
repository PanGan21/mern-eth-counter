var Count = artifacts.require("Count");

contract("Count", function(accounts) {
  // it("should assert true", function(done) {
  //   Count.deployed();
  //   assert.isTrue(true);
  //   done();
  // });
  let instance;
  before(async () => {
    instance = await Count.deployed();
  });

  it("should get the count value", async () => {
    let count = await instance.getCount.call({ from: accounts[0] });
    assert.equal(count, 0);
  });

  it("should increment the count value by 1", async () => {
    let count = await instance.increment.call({ from: accounts[0] });
    assert.equal(count, 1);
  });
});
