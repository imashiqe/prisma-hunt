import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const deleteOne = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });

  //   console.log(deleteOne);

  const deleteMany = await prisma.post.deleteMany({
    where: {
      id: {
        in: [2, 3, 4],
      },
    },
  });

  console.log(deleteMany);
};

deleteData();
