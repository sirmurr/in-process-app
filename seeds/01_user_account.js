/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_account").del();
  await knex("user_account").insert([
    // Two new users
    {
      id: 1,
      isNewMember: true,
      isAppAdmin: false,
      isTaskAdmin: false,
      isLeadership: false,
      MemberName: "John User",
      MemberEmail: "john@example.com",
      isInProcessed: false,
    },
    {
      id: 2,
      isNewMember: true,
      isAppAdmin: false,
      isTaskAdmin: false,
      isLeadership: false,
      MemberName: "Jane User",
      MemberEmail: "jane@example.com",
      isInProcessed: false,
    },
    // One app admin
    {
      id: 3,
      isNewMember: false,
      isAppAdmin: true,
      isTaskAdmin: false,
      isLeadership: false,
      MemberName: "Frank AppAdminson",
      MemberEmail: "frank.app@example.com",
      isInProcessed: true,
    },
    // Two task admins
    {
      id: 4,
      isNewMember: false,
      isAppAdmin: false,
      isTaskAdmin: true,
      isLeadership: false,
      MemberName: "Alice Taskerson",
      MemberEmail: "alice.taskerson@example.com",
      isInProcessed: true,
    },
    {
      id: 5,
      isNewMember: false,
      isAppAdmin: false,
      isTaskAdmin: true,
      isLeadership: false,
      MemberName: "Michael TaskyBrown",
      MemberEmail: "michael.taskybrown@example.com",
      isInProcessed: true,
    },
    // One leader
    {
      id: 6,
      isNewMember: false,
      isAppAdmin: false,
      isTaskAdmin: false,
      isLeadership: true,
      MemberName: "Sarah Commander",
      MemberEmail: "sarah.commander@example.com",
      isInProcessed: true,
    },

    /* Save for later testing

    {id: 7, isNewMember: true, isAppAdmin: false, isTaskAdmin: false, isLeadership: false, MemberName: 'David Wilson', MemberEmail: 'david.wilson@example.com', isInProcessed: false},
    {id: 8, isNewMember: false, isAppAdmin: true, isTaskAdmin: false, isLeadership: false, MemberName: 'Laura Martin', MemberEmail: 'laura.martin@example.com', isInProcessed: true},
    {id: 9, isNewMember: true, isAppAdmin: false, isTaskAdmin: false, isLeadership: false, MemberName: 'James Anderson', MemberEmail: 'james.anderson@example.com', isInProcessed: false},
    {id: 10, isNewMember: false, isAppAdmin: false, isTaskAdmin: true, isLeadership: false, MemberName: 'Patricia Thompson', MemberEmail: 'patricia.thompson@example.com', isInProcessed: true},
    {id: 11, isNewMember: true, isAppAdmin: false, isTaskAdmin: false, isLeadership: false, MemberName: 'Christopher Martinez', MemberEmail: 'christopher.martinez@example.com', isInProcessed: false},
    {id: 12, isNewMember: false, isAppAdmin: false, isTaskAdmin: false, isLeadership: true, MemberName: 'Karen Robinson', MemberEmail: 'karen.robinson@example.com', isInProcessed: true}*/
    // Add more entries as needed
  ]);
};
