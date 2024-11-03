import bcrypt from 'bcrypt';
import { invoices, customers, revenue, users } from '@/lib/placeholder-data';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seedUsers() {
  const insertedUsers = await Promise.all(
    users.map(async (user) => {

      const hashedPassword = await bcrypt.hash(user.password, 10);
      return prisma.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          password: hashedPassword,
        },
      });
    }),
  );

  return insertedUsers;
}

async function seedInvoices() {
  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => prisma.invoices.create({
        data: {
          customer_id: invoice.customer_id,
          amount: invoice.amount,
          status: invoice.status,
          date: new Date(invoice.date),
        },
      }),
    ),
  );
  return insertedInvoices;
}

async function seedCustomers() {
  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => prisma.customers.create({
        data: {
          id: customer.id,
          name: customer.name,
          email: customer.email,
          image_url: customer.image_url,
        },
      }),
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => prisma.revenue.create({
        data: {
          month: rev.month,
          revenue: rev.revenue
        },
      }),
    ),
  );

  return insertedRevenue;
}

export async function GET() {
  try {
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();

    return Response.json({ message: 'Database seeded successfully' });

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
