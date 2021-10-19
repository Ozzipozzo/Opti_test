const input = [
    {
      price: 3000,
      kind: 'reductionVoucher',
      savings: 300,
      savingsType: 'total',
    },
    {
      price: undefined,
      kind: 'sales',
      savings: 10,
      savingsType: 'percent',
    },
    {
      price: 3000,
      kind: 'sales',
      savings: 15,
      savingsType: 'percent',
    }
  ]


  transform(input)

  
  // output :
  // [
  //   {
  //     basePrice: '3 000 €',
  //     description: 'Vous économisez 300 € par rapport au prix initial',
  //     price: '2 700 €',
  //     savings: '300 €',
  //     title: 'Bon de réduction',
  //   },
  //   {
  //     basePrice: '3 000 €',
  //     description: 'Vous économisez 450 € par rapport au prix initial',
  //     price: '2 550 €',
  //     savings: '15 %',
  //     title: 'Soldes',
  //   }
  // ]