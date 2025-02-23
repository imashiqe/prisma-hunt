import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 1,
    take: 2,
    orderBy: {
      id: "desc",
    },
  });

  console.log("Offset Pagination", offsetData);
};

paginationSorting();
