const fs = require('fs');

const customers = [
  'AK',
  'Aashish Ranjan',
  'Aditya Jivika',
  'Aftab Trajdi',
  'Ajit',
  'Ajitesh HDFC',
  'Ajitesh Roommate HDFC',
  'Akhilesh SBI',
  'Akhtar',
  'Aman ICICI',
  'Amardeep',
  'Amardeep Degree College',
  'Amit Jha',
  'Amit Jha Jivika',
  'Amit MR',
  'Amrit',
  'Aniket',
  'Anil',
  'Arjun Police Line',
  'Ashish Niyojan',
  'Ashish RSM',
  'Avinash',
  'BB',
  'BM ICICI',
  'Brajesh',
  'Chaman',
  'Chitranjan SBI',
  'Dhananjay IDBI',
  'Dipesh',
  'Gokul HDFC',
  'Harshvardhan',
  'Imran',
  'Jaiveer Pashupalan',
  'Kundan ICICI',
  'Manish Jio',
  'Manoj',
  'Manoranjan',
  'Mary DRCC',
  'Neha SS',
  'Nishant',
  'Pankaj Shani Mandir',
  'Papa - 2',
  'Pratay',
  'Preetesh',
  'Rajendra HDFC',
  'Rakesh RBL',
  'Ram Bali Police Line',
  'Ravi Thana',
  'Rupesh',
  'S Kumar SBI Chakla',
  'Sanjit ICICI',
  'Santosh ITI',
  'Santosh Police Line',
  'Sashiranjan',
  'Sashwat ICICI',
  'Satendra',
  'Satwan SBI Chakla',
  'Saurabh HDFC',
  'Saurabh Jhakrahi',
  'Shiv Kumar ICICI',
  'Shri Ram 102',
  'Shri Ram Jha Ji',
  'Shyamantak HDFC',
  'Sonu Trajdi',
  'Sujata',
  'Sunil IDBI',
  'Sushil',
  'Umesh SBI',
  'Vaibhav Shani Mandir',
  'Vashishth Police Line',
  'Vikas Thana',
  'Vikash Police Line',
  'Vivek',
];

const data = fs.readFileSync('db.json');
let jsonData = JSON.parse(data);
let id = 1;

customers.forEach((customer) => {
  jsonData.customers.push({
    id: id,
    name: customer,
    endDate: '2023-01-01',
    previousBalance: 500,
    advance: 0,
    vegPrice: 50,
    eggPrice: 70,
    chickenPrice: 80,
    fishPrice: 80,
    muttonPrice: 120,
  });

  jsonData = { ...jsonData, [customer]: {} };

  id++;
});

fs.writeFileSync('db.json', JSON.stringify(jsonData));
