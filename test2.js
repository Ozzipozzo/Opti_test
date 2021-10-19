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


  const transform = x => {
      
    let tab = []
    let tab2 = []


    // check is the price is undefined or not
    x.forEach(e => {
        if(e.price) {
            tab.push(e)
        }
    });


    tab.forEach(e => {
        switch (e.savingsType) {
            case "total":
                let price = e.price - e.savings
                tab2.push({
                    "basePrice": '3000 €',
                    "description": `Vous économisez ${e.savings} € par rapport au prix initial`,
                    "price": price.toString() + " €",
                    "savings": e.savings.toString() + " €",
                    "title": 'Bon de reduction'
                });
            break;
            
            case "percent":
                let totalSavings = (e.savings / 100) * e.price
                let price2 = e.price - totalSavings
                tab2.push({
                    "basePrice": '3000 €',
                    "description": `Vous économisez ${totalSavings} € par rapport au prix initial`,
                    "price": price2.toString() + " €",
                    "savings": e.savings.toString() + " %",
                    "title": 'Soldes'
                });
            break;
                default: 
                console.log("Veuillez renseigner un tableau d'object");
        }
    });
    
    console.log(tab2)
   
}

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