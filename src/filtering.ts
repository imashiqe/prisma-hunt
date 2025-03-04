import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          published: true,
        },
        {
          title: {
            contains: "Software",
          },
        },
      ],
    },
  });
};

const notFiltering = async () => {
  return await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "Software",
          },
        },
      ],
    },
  });
};

const startsWith = await prisma.user.findMany({
  where: {
    email: {
      startsWith: "fahim",
    },
  },
});

const runFilters = async () => {
  await filtering();
  await notFiltering();
};

runFilters();
