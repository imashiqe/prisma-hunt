import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const relationalQuerise = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
};

relationalQuerise();
