import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Hello World Now",
  //       content: "This is a test post",
  //       authorName: "Alice",
  //       published: false,
  //     },
  //   });
  //   console.log(result);
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
