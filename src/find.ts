import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const findFirst = await prisma.post.findFirst({
  //     where: {
  //       id: 15,
  //     },
  //   });

  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      id: 15,
    },
  });
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 15,
    },
  });
  console.log(findFirst);
};

main();
