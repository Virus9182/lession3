let money=20000;
let income=10000;
let addExpenses='Интернет = 500, Такси = 500, Коммуналка = 2000';
let deposit=false;
let mission=30000;
let period=4;

console.log(money);
console.log(income);
console.log(deposit);
console.log(addExpenses.length);
console.log('Период равен '+period+' месяцев');
console.log('Цель заработать '+mission+' рублей');
let aaddExpenses=addExpenses.toLowerCase();
let budgetDay=money/30;
console.log(budgetDay);


/*money=prompt('Ваш месячный доход');
console.log(money);
addExpenses=prompt('Перечислите возможные расходы за рассчитываемый период через запяту');
console.log(addExpenses);
deposit=confirm('Есть ли у вас депозит в банке?');
console.log(deposit);
*/
let expenses1=prompt('Введите обязательную статью расходов?');
console.log(expenses1);
let amount1=prompt('Во сколько это обойдется?');
console.log(amount1);
let budgetMonth=money-expenses1-amount1;
console.log(Math.ceil(budgetMonth));
let month=mission/budgetMonth;
console.log(month);
budgetDay=budgetMonth/30;
console.log(Math.floor(budgetDay));
if (budgetDay>1200)
{
    console.log('У вас высокий уровеь дохода')

    } else
if (600 < budgetDay > 1200)
{ 
console.log('У вас средний уровеь дохода')
} else
if (budgetDay < 600)
{
    console.log('К сожалению у вас уровень дохода ниже среднего')
} else
if (budgetDay < 0)
{
    console.log('Что-то пошло не так');
};





