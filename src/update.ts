import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       title: "Hello World Now updated",
  //       content: "This is a test post updated",
  //       authorName: "Ashiqe",
  //       published: false,
  //     },
  //   });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       id: {
  //         in: [1, 2, 3, 4],
  //       },
  //     },
  //     data: {
  //       authorName: "Ashiqe",
  //     },
  //   });

  //   console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "Hello World Now updated",
      content: "This is a test post updated",
      authorName: "Ashiqe",
      published: false,
    },
    create: {
      title: "Hello World Now",
      content: "This is a test post",
      authorName: "Ashiqe",
      published: false,
    },
  });
};

updates();
