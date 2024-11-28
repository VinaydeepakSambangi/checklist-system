function evaluateChecklist(data, rules) {
    return rules.map(rule => {
      switch (rule.id) {
        case 'valuationFeePaid':
          return { rule: rule.description, status: data.isValuationFeePaid === true ? 'Passed' : 'Failed' };
        case 'ukResident':
          return { rule: rule.description, status: data.isUkResident === true ? 'Passed' : 'Failed' };
        case 'riskRating':
          return { rule: rule.description, status: data.riskRating === 'Medium' ? 'Passed' : 'Failed' };
        case 'ltvBelow60':
          const ltv = (data.loanRequired / data.purchasePrice) * 100;
          return { rule: rule.description, status: ltv < 60 ? 'Passed' : 'Failed' };
        default:
          return { rule: rule.description, status: 'Unknown Rule' };
      }
    });
  }
  
  module.exports = evaluateChecklist;
  