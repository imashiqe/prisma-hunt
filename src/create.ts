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

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Hello World Now",
        content: "This is a test post",
        authorName: "Alice",
        published: false,
      },
      {
        title: "Hello World Now2",
        content: "This is a test post2",
        authorName: "Alice2",
        published: false,
      },
      {
        title: "Hello World Now3",
        content: "This is a test post3",
        authorName: "Alice3",
        published: false,
      },
    ],
  });

  console.log(createMany);
};

main();
