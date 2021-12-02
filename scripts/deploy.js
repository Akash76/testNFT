async function main() {
  const testNFT = await ethers.getContractFactory("testNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const TestNFT = await testNFT.deploy();
  console.log("Contract deployed to address:", TestNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// 0x7c3BC40c767D1E89A5603f41314c4C70DBFB3A66
