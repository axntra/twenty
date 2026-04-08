export const UNIVERSAL_IDENTIFIERS = {
  application: {
    universalIdentifier: '14e0b8aa-8bac-44ab-bd85-e57eab0f7c0a',
  },
  objects: {
    contract: {
      universalIdentifier: 'f84de058-ee7b-4f27-b964-a45b545485e8',
      fields: {
        name: {
          universalIdentifier: '39ce385e-c275-4314-b620-019474bff957',
        },
        contractNumber: {
          universalIdentifier: 'f9ec935d-5b32-44ff-a34d-d07a4316615a',
        },
        type: {
          universalIdentifier: '64f08499-5f05-4de0-b26f-1c2a5e12631f',
        },
        status: {
          universalIdentifier: '5c65a7b8-d098-44d1-a261-06c258394d53',
        },
        startDate: {
          universalIdentifier: 'd7f28b2b-7169-4a1f-94f1-03b3d279a1bd',
        },
        endDate: {
          universalIdentifier: '51fd457c-65fd-493a-9b15-5e275e9d18c5',
        },
        totalValue: {
          universalIdentifier: 'fdde8456-dd35-4e87-af02-00c806e0f422',
        },
        billingFrequency: {
          universalIdentifier: '16dbe874-361a-4ebf-8fa6-22b0e88d82e2',
        },
        notes: {
          universalIdentifier: '65b31759-f278-43a3-ae16-19f42e2ba6d5',
        },
        company: {
          universalIdentifier: 'f1809829-e8e1-41f8-9655-213f6c8b6b32',
        },
        contact: {
          universalIdentifier: 'ec615cbc-6773-4ac6-95e9-92ff7dc50ff9',
        },
        invoices: {
          universalIdentifier: '2914fe75-567d-46e8-b9fa-a8ddb0eb1a29',
        },
      },
    },
    invoice: {
      universalIdentifier: 'e40ddd72-e403-4247-bcd3-a4c48a1750b7',
      fields: {
        invoiceNumber: {
          universalIdentifier: '56218649-78d9-45af-9f93-46238492c1fa',
        },
        status: {
          universalIdentifier: '697a9e11-5030-4de9-a133-509f05dccd70',
        },
        issueDate: {
          universalIdentifier: '1a5f5933-d0b7-48f8-8b4b-85bb05f30fd3',
        },
        dueDate: {
          universalIdentifier: '14cbbc21-c6de-42eb-a2e9-f55918198427',
        },
        subtotal: {
          universalIdentifier: 'e6419732-1c36-4ff0-8097-f0cee0f72ad1',
        },
        taxRate: {
          universalIdentifier: 'ca2dc34b-2989-4650-bb5b-111616532111',
        },
        taxAmount: {
          universalIdentifier: '15b9239a-1c78-4ceb-b4f2-bea6c88037ce',
        },
        totalAmount: {
          universalIdentifier: '597a400c-0233-4a52-9008-eb622c4a50f9',
        },
        paidAmount: {
          universalIdentifier: '6e18e3d1-2e9e-4899-869f-24993d736e9a',
        },
        paidDate: {
          universalIdentifier: '450543f2-6af9-4eb8-88b8-9641a488e9df',
        },
        notes: {
          universalIdentifier: '901d1043-6f09-47ee-87f9-4c177a8ea9b3',
        },
        company: {
          universalIdentifier: '74a66545-e80b-42da-85f0-3b8f70044f23',
        },
        contract: {
          universalIdentifier: '44584f3c-d2d1-4a6a-894d-bb00e3b19847',
        },
        lineItems: {
          universalIdentifier: 'bf6c3fae-7d1e-4ef2-bc47-9341aeb51a11',
        },
      },
    },
    invoiceLineItem: {
      universalIdentifier: '4dfd9735-fdc5-4b42-adff-d566eed5cfaa',
      fields: {
        description: {
          universalIdentifier: 'b945e70c-4b14-434e-9c5a-aae105337299',
        },
        quantity: {
          universalIdentifier: '8e37b3f5-2a38-4c46-a293-ff4327ec13c8',
        },
        unitPrice: {
          universalIdentifier: '95908f88-1022-40b8-9ae6-e8c2af9565ce',
        },
        amount: {
          universalIdentifier: 'a3713ed6-190b-4280-9715-8cb8bf2c49f7',
        },
        invoice: {
          universalIdentifier: '97b285a2-bb9b-489d-a34e-0a0ab4f346dd',
        },
      },
    },
  },
  fields: {
    contractsOnCompany: {
      universalIdentifier: '48391671-05e6-4338-a903-82fd43d23c78',
    },
    invoicesOnCompany: {
      universalIdentifier: '469fa1c9-5430-4fdd-8b36-063395cabeea',
    },
    contractsOnPerson: {
      universalIdentifier: 'fabb7466-8cd9-49d9-8a7b-92e10ceeb8a9',
    },
  },
  roles: {
    defaultRole: {
      universalIdentifier: '07356cf9-cc76-40c8-ac8b-3bae81480751',
    },
  },
  views: {
    allContracts: {
      universalIdentifier: 'c9f657d7-05bb-4555-8078-db18ca1104f9',
    },
    allInvoices: {
      universalIdentifier: '9ffcba38-170d-484a-94e7-6a8a4946da9f',
    },
  },
  viewFields: {
    contractName: {
      universalIdentifier: '7eeefcec-c876-4587-ac9f-cbb2d4b518ed',
    },
    contractNumber: {
      universalIdentifier: '1515a137-e52c-4428-884e-031aba16f59e',
    },
    contractType: {
      universalIdentifier: 'da0bfa6d-994e-4a50-bb73-2fca504762e5',
    },
    contractStatus: {
      universalIdentifier: '51f25780-cfe0-4f6b-b244-8f3192adcd26',
    },
    contractTotalValue: {
      universalIdentifier: '5dd77c43-351f-442e-afc9-b13696c3110a',
    },
    contractCompany: {
      universalIdentifier: '0ba5a52d-106b-499f-b3bb-1544b83210fe',
    },
    contractStartDate: {
      universalIdentifier: '8494c044-b6fe-4c41-888e-a6c92dea215a',
    },
    invoiceNumber: {
      universalIdentifier: '1e865073-ed01-4b42-ace9-f0f02d07ed3f',
    },
    invoiceStatus: {
      universalIdentifier: 'a54cd673-08df-4886-9cb3-dc1530585a68',
    },
    invoiceCompany: {
      universalIdentifier: '82c7113f-02c5-43ec-8b01-bf8bc325a096',
    },
    invoiceTotalAmount: {
      universalIdentifier: '149a4517-6554-4bcd-b683-abac575ef064',
    },
    invoiceIssueDate: {
      universalIdentifier: '9e6a23d5-dc62-4aaf-bd0f-2b1a47218c4e',
    },
    invoiceDueDate: {
      universalIdentifier: '5b621a45-e65e-4692-bbb3-7fa6a2779ab1',
    },
  },
  navigationMenuItems: {
    contracts: {
      universalIdentifier: 'f2b4f8a6-5e89-420c-a2ee-7057a18d27fa',
    },
    invoices: {
      universalIdentifier: 'b9be49ff-1877-4b34-afb1-b7098ac2f3ec',
    },
  },
  logicFunctions: {
    generateInvoiceNumber: {
      universalIdentifier: 'f83022b0-a050-4534-848e-fd42f054108e',
    },
    preInstall: {
      universalIdentifier: 'a5e50f99-9fd4-4c0a-80e4-0cf741b85d1f',
    },
    postInstall: {
      universalIdentifier: 'd48f9362-ced9-438b-a147-de83558c4cbf',
    },
  },
};
