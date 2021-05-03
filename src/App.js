import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import EndPage from './pages/EndPage'

function App() {
  const [step, setStep] = useState(1)
  const [quizNumber, setQuizNumber] = useState(0)

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'ეთიკაში გამოიყოფა ურთიერთობის შემდეგი სახეები:',
      answers: [
        {
          id: 1,
          answer: 'საკუთარ თავთან, ოჯახთან და  გარემოსთან ურთიერთობა',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'სხვა ადამიანებთან და გარემოსთან ურთიერთობა',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'საკუთარ თავთან, სხვა ადამიანებთან და გარემოსთან ურთიერთობა',
          isCorrect: true,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 2,
      question: 'არსებობს შემდეგი სახის ეთიკა',
      answers: [
        {
          id: 1,
          answer: 'ინდივიდუალური, ოჯახური და საზოგადოებრივი',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ინდივიდუალური, პიროვნული და საზოგადოებრივი',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'პიროვნული, საერთაშორისო და საზოგადოებრივი',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 3,
      question: 'ბიზნესის ეთიკა იყოფა:',
      answers: [
        {
          id: 1,
          answer: 'ნორმატიულ და უნივერსალურ ეთიკად',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ბედნიერების, ღირებულების და მოვალეობის ეთიკად',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'მიკროეთიკად და მაკროეთიკად',
          isCorrect: true,
        },
        {
          id: 4,
          answer: 'რიგორისტულ და დეონტოლოგიურ ეთიკად',
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      question: 'ნორმატიულ ეთიკაში გადაწყვეტილებების მიღებისას ითვალისწინებენ:',
      answers: [
        {
          id: 1,
          answer: 'მორალურ-სამართლებრივ  ნორმებს',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'მორალურად მისაღებ ინდივიდუალურ ინტერესებს',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'მორალურად მისაღებ უტილიტარიზმს',
          isCorrect: false,
        },
        { id: 4, answer: 'ყველა პასუხი მართალია', isCorrect: true },
      ],
    },
    {
      id: 5,
      question:
        'პიროვნების ღირებულებითი ორიენტაციიდან გამომდინარე ადამიანის მოქმედებები განისაზღვრება შემდეგი ნორმათა სისტემით:',
      answers: [
        {
          id: 1,
          answer: 'სამართლებრივ-საგანონმდებლო სისტემა',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'სოციალური ნორმები-ეთიკური სისტემა',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'პიროვნული ნორმები- თავისუფალი არჩევანის სისტემა',
          isCorrect: false,
        },
        { id: 4, answer: 'ყველა პასუხი მართალია', isCorrect: true },
      ],
    },
    {
      id: 6,
      question: 'ეთიკური თვალსაზრისით ღირებულება არის:',
      answers: [
        {
          id: 1,
          answer: 'დადებითი',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'უარყოფითი',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'დადებითი და უარყოფითი',
          isCorrect: true,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 7,
      question: 'ჩამოთვლილთაგან რომელი არ არის ზნეობის ფუნქცია:',
      answers: [
        {
          id: 1,
          answer: 'რეგულაციური',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'აღმზრდელობითი',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'შეფასებითი',
          isCorrect: false,
        },
        { id: 4, answer: 'შრომითი', isCorrect: true },
      ],
    },
    {
      id: 8,
      question: 'რა მიმართებაა გამოყენებითი ეთიკასა და პროფესიულ ეთიკას შორის?',
      answers: [
        {
          id: 1,
          answer: 'პირველადია გამოყენებითი ეთიკა',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'პროფესიული ეთიკა არის გამოყენებითი ეთიკის საფუძველი',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'ისინი დამოუკიდებლად არსებობენ',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 9,
      question: 'როდის დაიწყო ბიზნესის ეთიკის პრობლემების კვლევა?',
      answers: [
        {
          id: 1,
          answer: 'XX საუკუნის 60–70–იან წლებში',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'XIX საუკუნის ბოლოს',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'XX საუკუნის ბოლოს და XXI საუკუნის დასაწყისში',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 10,
      question: 'ბიზნესში ეთიკური პრობლემების გადაწყვეტისას ეყრდნობიან:',
      answers: [
        {
          id: 1,
          answer: 'ბიზნესის ინტერესებს და სამართლებრივ ნორმებს',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'სამართლებრივ, სოციალურ და პიროვნულ ნორმებს',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'მორალურ–სამართლებრივ ნორმებს',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 11,
      question:
        'ფულის აღებისას ეკონომიკურ და სამართლებრივ პრობლემებთან ერთად რა ზნეობრივ პასუხისმგებლობას ვკისრულობთ?',
      answers: [
        {
          id: 1,
          answer: 'ფულის აღება არ არის ზნეობრივი',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ფულის აღება ჩვენს შემოსავლებს გაზრდის',
          isCorrect: false,
        },
        {
          id: 3,
          answer:
            'ფულის აღება ვალის დროულად დაბრუნების მორალურ პასუხისმგებლობას გვაკისრებს',
          isCorrect: true,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 12,
      question: 'ფულის გაცემისას რა ზნეობრივი დილემის წინაშე ვდგებით?',
      answers: [
        {
          id: 1,
          answer:
            'შეიძლება მსესხებელმა ფული არ დაგვიბრუნოს, მაგრამ გასესხებულმა თანხამ შეიძლება დიდი სიკეთე მოუტანოს მსესხებელს',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'ჩვენი ფულით სხვა დაიწყებს ახალ ბიზნესს',
          isCorrect: false,
        },
        {
          id: 3,
          answer:
            'ფულის გასესხება ყოველთვის სარისკოა, ამიტომ თავიდან უნდა ავიცილოთ იგი',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 13,
      question: '"ვარსკვლავური დაავადება" ფულთან მიმართებაში ნიშნავს:',
      answers: [
        {
          id: 1,
          answer: 'ქედმაღლობას',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'შოუ ბიზნესში ჩაბმას',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'სიმდიდრეს',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 14,
      question:
        'ნორმატიულ ეთიკაში ჩამოთვლილთაგან გადაწყვეტილების მიღებისას არ ითვალისწინებენ:',
      answers: [
        {
          id: 1,
          answer: 'სარგებლიანობას (უტილიტარიზმს)',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ინდივიდის ინტერესებს (მორალურად მისაღები)',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'მორალურ–სამართლებრივ ნორმებს',
          isCorrect: false,
        },
        { id: 4, answer: 'კონკურენტების ინტერესებს', isCorrect: true },
      ],
    },
    {
      id: 15,
      question:
        'ხასიათის ორიენტაციის თვალსაზრისით ჩამოთვლილი ტიპებიდან ყველაზე უფრო რომელი ტიპის ადამიანი მოდის ეთიკასთან წინააღმდეგობაში:',
      answers: [
        {
          id: 1,
          answer: 'რეცეპტული ოტიენტაციის ადამიანი',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ექსპლოატატორული ორიენტაციის ადამიანი',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'დაგროვებითი ორიენტაციის ადამიანი',
          isCorrect: false,
        },
        { id: 4, answer: 'საბაზრო ორიენტაციის ადამიანი', isCorrect: true },
      ],
    },
    {
      id: 16,
      question:
        'ჩამოთვლილთაგან რომელი არ არის ეთიკური აზროვნების ძირითადი ტიპი?',
      answers: [
        {
          id: 1,
          answer: 'ბედნიერება',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'მოვალეობა',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'ღირებულება',
          isCorrect: false,
        },
        { id: 4, answer: 'შეფასება', isCorrect: true },
      ],
    },
    {
      id: 17,
      question: 'სათნოება ეთიკური თვალსაზრისით არის:',
      answers: [
        {
          id: 1,
          answer: 'უნარი',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'საფუძველი',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'ვნება',
          isCorrect: false,
        },
        { id: 4, answer: 'ღირებულება', isCorrect: false },
      ],
    },
    {
      id: 18,
      question:
        'ზოგადი ეთიკის კერძო მხარე- გამოყენებითი ეთიკა კულისხმობს შემდეგ მომენტს:',
      answers: [
        {
          id: 1,
          answer: 'რას ვიყენებთ',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'როგორ ვიყენებთ',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'სად ვიყენებთ',
          isCorrect: false,
        },
        { id: 4, answer: 'ყველა მათგანი სწორია', isCorrect: true },
      ],
    },
    {
      id: 19,
      question: 'ადამიანი და პიროვნება ეთიკისათვის არის:',
      answers: [
        {
          id: 1,
          answer: 'აბსოლუტურად ერთნაირი',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'მცირედით განსხვავდებიან',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'გამიჯნულია',
          isCorrect: true,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 20,
      question:
        'ჩამოთვლილთაგან ერიხ ფრომის კლასიფიკაციით, ხასიათის ორიენტაციის მიხედვით გამოყოფილ ტიპებში არ იგულისხმება:',
      answers: [
        {
          id: 1,
          answer: 'რეცეპტული და ექსპლოატარული ორიენტაციის',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ასერტიული ორიენტაციის',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'დაგროვებითი ორიენტაციის',
          isCorrect: false,
        },
        { id: 4, answer: 'საბაზრო ორიენტაციის', isCorrect: false },
      ],
    },
    {
      id: 21,
      question:
        'ეთიკური აზროვნების რომელი ტიპი მიიჩნევს „ზნეობრივ  სათნოებას საუკეთესოდ მოქცევის უნარად":',
      answers: [
        {
          id: 1,
          answer: 'მოვალეობის ეთიკა',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ბედნიერების ეთიკა',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'ღირებულების ეთიკა',
          isCorrect: false,
        },
        { id: 4, answer: 'დეონტოლოგიური ეთიკა', isCorrect: false },
      ],
    },
    {
      id: 22,
      question: 'მარადიულია ისეთი ღირებულება:',
      answers: [
        {
          id: 1,
          answer: 'რომელიც შეიცავს დიდ მატერიალურ დოვლათს',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'მარადიულად უზრუნველყოფს ადამიანებს სასიცოცხლო ღირებულებებით',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'სულიერი (გონითი) ღირებულება',
          isCorrect: true,
        },
        {
          id: 4,
          answer: 'მყარად ნაგები ისტორიული ძეგლები და ანტიკვარული ნივთები',
          isCorrect: false,
        },
      ],
    },
    {
      id: 23,
      question: 'ზნეობის დაფუძვნების თვალსაზრისით პირველადია:',
      answers: [
        {
          id: 1,
          answer: 'მოვალეობა',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ღირებულება',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'ბედნიერება',
          isCorrect: false,
        },
        { id: 4, answer: 'შეფასება', isCorrect: false },
      ],
    },
    {
      id: 24,
      question: 'სამართალი ეთიკაში არის:',
      answers: [
        {
          id: 1,
          answer: 'ზნეობის მინიმუმი',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'ზნეობის მაქსიმუმი',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'ზნეობის ტოლფარდი',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 25,
      question: '"შეფასება" არის ეთიკური აზროვნების:',
      answers: [
        {
          id: 1,
          answer: 'არსებითი ნიშანი',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'ეთიკის პრინციპი',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'ეთიკური აზროვნების ძირითადი ტიპი',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 26,
      question: 'ეთიკური რიგორიზმი ზნეობას აფუძვნებს მხოლოდ:',
      answers: [
        {
          id: 1,
          answer: 'მოვალეობაზე',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'პასუხისმგებლობაზე',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'ღირებულებაზე',
          isCorrect: false,
        },
        { id: 4, answer: 'ბედნიერებაზე', isCorrect: false },
      ],
    },
    {
      id: 27,
      question: 'დეონტოლოგიური ეთიკის თანახმად:',
      answers: [
        {
          id: 1,
          answer: 'პირველადია პასუხისმგებლობა',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'მიზანი ამართლებს საშუალებას',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'ბედნიერება',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 28,
      question: 'ჩამოთვლილთაგან რომელი არ არის ზნეობის პრინციპი',
      answers: [
        {
          id: 1,
          answer: 'შრომისმოყვარეობა',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'მიზანსწრაფულობა და გამჭრიახობა',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'ტოლერანტობა',
          isCorrect: false,
        },
        { id: 4, answer: 'ჰუმანიზმი', isCorrect: false },
      ],
    },
    {
      id: 29,
      question:
        'ქცევის ოთხი ტიპის ადამიანებიდან, ბიზნესში წარმატების მეტი შანსი ვის აქვს?',
      answers: [
        {
          id: 1,
          answer: 'პასიურ არაასერტიულ ადამიანს',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'გარიყურ არაასერტიულ ადამიანს',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'აგრესიულ ადამიანს',
          isCorrect: false,
        },
        { id: 4, answer: 'ასერტიულ ადამიანს', isCorrect: true },
      ],
    },
    {
      id: 30,
      question: 'როდის მიაღწევს ბიზნესის ურთიერთობის ხელოვნება წარმატებას?',
      answers: [
        {
          id: 1,
          answer: 'როცა უნარიანად უძღვებიან კორპორაციას',
          isCorrect: false,
        },
        {
          id: 2,
          answer:
            'როცა იცავენ ბიზნესის ეთიკის პრინციპებს და სოციალური პასუხისმგებლობის ნორმებს',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'როცა დაამყარებენ ჰარმონიულ ურთიერთობას მომხმარებლებთან',
          isCorrect: false,
        },
        { id: 4, answer: 'როცა კომპანიას მოგებაზე გავა', isCorrect: false },
      ],
    },
    {
      id: 31,
      question:
        'ჩამოთვლილთაგან რას არ ითვალისწინებენ პრაგმატიკოსები მეწარმეობაში?',
      answers: [
        {
          id: 1,
          answer: 'საზოგადოების მოთხოვნებს ბიზნესისადმი',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'იმ საქმიანობას, რაც კანონით არ არის აკრძალული',
          isCorrect: false,
        },
        {
          id: 3,
          answer:
            'მეაწარმის მიერ შეცნობილ ზნეობრივ და სოციალურ პასუხისმგებლობას ',
          isCorrect: true,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 32,
      question: 'როგორ იქცევიან ასერტიული ადამიანები ბიზნესში?',
      answers: [
        {
          id: 1,
          answer: 'სხვის ხარჯზე აღწევენ წარმატებას',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'საკუთარი ძალებით აღწევენ წარმატებას და ეხმარებიან სხვებსაც',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'ხშირად ვარდებიან სტრესულ მდგომარეობაში',
          isCorrect: false,
        },
        {
          id: 4,
          answer: 'არ იჩენენ აქტივობას და დაუცველები არიან',
          isCorrect: false,
        },
      ],
    },
    {
      id: 33,
      question: 'ბიზნესის სახელმწიფო რეგულირება თანახმად:',
      answers: [
        {
          id: 1,
          answer:
            'კომპანიებს ბაზრისაგან დამოუკიდებლად ეკრძალებად ფასებზე შეთანხმება',
          isCorrect: false,
        },
        {
          id: 2,
          answer:
            'სახელმწიფო აწესებს ზედამხედველობას მომხმარებელთა ინტერესების დაცვაზე',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'ბიზნესის გარემოზე ზემოქმედებას აკონტროლებს სახელწიფო',
          isCorrect: false,
        },
        { id: 4, answer: 'ყველა პასუხი მართალია', isCorrect: true },
      ],
    },
    {
      id: 34,
      question:
        'ჩამოთვლილთაგან რომელია ბიზნესის ეთიკის მაფორმირებელი კომპონენტები?',
      answers: [
        {
          id: 1,
          answer: 'ბედნიერება, მოვალეობა',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ღირებულება, შეფასება',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'პატიოსნება, თავისუფლება, დელიკატურობა, მოთმინება',
          isCorrect: true,
        },
        {
          id: 4,
          answer: 'სამართლიანობა, შრომისმოყვარეობა, ჰუმანიზმი',
          isCorrect: false,
        },
      ],
    },
    {
      id: 35,
      question:
        'რა შემთხვევაში მიაღწევს ბიზნეს–ურთიერთობა  ხელოვნების ხარისხს?',
      answers: [
        {
          id: 1,
          answer:
            'როცა მისი მონაწილეები წარმატებულ ბიზნესთან ერთად დაიცავენ ეთიკის ნორმებს და სოციალური პასუხილმგებლობის წესებს',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'როცა ბიზნესი ძალიან განვითარდება',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'როცა ბევრი სამუშაო ადგილი შეიქმნება',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 36,
      question: 'ბიზნესში წარმატებას პროფესიონალიზმთან ერთად განაპირობებს:',
      answers: [
        {
          id: 1,
          answer: 'ინტუიცია და რისკი',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ინვესტიცია',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'კარგი განათლება',
          isCorrect: false,
        },
        { id: 4, answer: 'ადამიანური ურთიერთობები', isCorrect: true },
      ],
    },
    {
      id: 37,
      question: 'ჩამოთვლილთაგან რა არ შედის მაკროეთიკის ინტერესების სფეროში?',
      answers: [
        {
          id: 1,
          answer: 'კორპორაციებსა და მომხმარებლებს შორის ურთიერთობა',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'კორპორაციებსა და სახელმწიფო ორგანოებს შორის ურთიერთობა',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'კორპორაციებს, საზოგადოებასა და გარემოს შორის ურთიერთობა ',
          isCorrect: false,
        },
        {
          id: 4,
          answer: 'მენეჯერებსა და კორპორაციის კონსტრუქტორებს შორის ურთიერთობა',
          isCorrect: true,
        },
      ],
    },
    {
      id: 38,
      question:
        'რომელ ზნეობრივ პრინციპს უჭირავს მთავარი ადგილი მეწარმეობასა და ბიზნესში?',
      answers: [
        {
          id: 1,
          answer: 'ტოლერანტობას',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ჰუმანურობას',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'შრომისმოყვარეობას',
          isCorrect: true,
        },
        { id: 4, answer: 'ოჯახის სიყვარულს', isCorrect: false },
      ],
    },
    {
      id: 39,
      question: 'ბიზნესის კულტურა მაშინ აღწევს მაღალ სტანდარტს, როცა:',
      answers: [
        {
          id: 1,
          answer: 'ფირმის ყველა წევრი თანაბრად შრომობს',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'პერსონალი ზეგანაკვეთურ სამუშაოს მუდმივად ასრულებს',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'შრომას შემოქმედებითი ხასიათი აქვს',
          isCorrect: true,
        },
        {
          id: 4,
          answer: 'პერსონალი განუხრელად ასრულებს მენეჯერის მითითებებს',
          isCorrect: false,
        },
      ],
    },
    {
      id: 40,
      question: 'კორპორაციული კულტურის ხილულ დონეს მიეკუთვნეება:',
      answers: [
        {
          id: 1,
          answer: 'პერსონალის კომუნიკაციური უნარები',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'თანამშრომლებისადმი ზედმეტი სახელების მიკუთვნება',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'კომპანიის სიმბოლოები',
          isCorrect: true,
        },
        { id: 4, answer: 'კონფლიქტების გადაჭრის ხერხები', isCorrect: false },
      ],
    },
    {
      id: 41,
      question: 'კორპორაციული კულტურის ტიპებს  მიეკუთვნება:',
      answers: [
        {
          id: 1,
          answer: 'ადაპტაციური',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'შედეგზე ორიენტირებული',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'კლანური და ბიუროკრატიული',
          isCorrect: false,
        },
        { id: 4, answer: 'ყველა პასუხი მართალია', isCorrect: true },
      ],
    },
    {
      id: 42,
      question:
        'ჩამოთვლილთაგან რომელი ფაქტორი  ახდენს გავლენას კორპორაციულ კულტურაზე?',
      answers: [
        {
          id: 1,
          answer: 'ბაზა(ორგანიზაცია,ჯგუფი)',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ღირებულებითი ორიენტაცია',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'სიმბოლიკა',
          isCorrect: false,
        },
        { id: 4, answer: 'ყველა პასუხი მართალია', isCorrect: true },
      ],
    },
    {
      id: 43,
      question: 'რა არის ბიზნესის კულტურა?',
      answers: [
        {
          id: 1,
          answer:
            'სუბიექტების მიერ სამეწარმეო საქმიანობის განხორციელების პრინციპების და წესების ერთობლიობა, სამართლებრივი და ზნეობრივი ნორმების შესაბამისად',
          isCorrect: true,
        },
        {
          id: 2,
          answer: 'პერსონალის და მენეჯმენტის მიერ კულტურული ნორმების დაცვა',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'პერსონალის მიერ მოვალეობების კულტურულად შესრულება',
          isCorrect: false,
        },
        {
          id: 4,
          answer: 'პერსონალის და მენეჯერების ურთიერთპატივისცემა',
          isCorrect: false,
        },
      ],
    },
    {
      id: 44,
      question: 'ჩამოთვლილთაგან საორგანიზაციო კულტურაში რა არ იგულისხმება?',
      answers: [
        {
          id: 1,
          answer:
            'კულტურა, რომელიც განსაზღვრავს კორპორაციის ეკონომიკური განვითარების დონეს',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'კულტურა, რომელიც განსაზღვრავს ტრადიციების მიმდევრობის დონეს',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'კულტურა, რომელშიც აისახება ღირებულებითი მნიშვნელობები',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 45,
      question:
        'ბიზნესის ეთიკის უმთავრესი ფუნქცია - ზნეობრივი მენეჯმენტის დამკვიდრება, როდის ხორციელდება?',
      answers: [
        {
          id: 1,
          answer: 'ბიზნესის დაგეგმვის პროცესში',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'მართვის პროცესში',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'პერსონალის მოტივაციის პროცესში',
          isCorrect: false,
        },
        { id: 4, answer: 'ბიზნეს გეგმის შედგენის პროცესში', isCorrect: false },
      ],
    },
    {
      id: 46,
      question:
        'ეთიკური ურთიერთობის „ქვემოდან ზემოთ" მიმართულება ითვალისწინებს:',
      answers: [
        {
          id: 1,
          answer: 'მენეჯერის ეთიკური მრწამსის გაცნობას დაქვემდებარებულთათვის',
          isCorrect: false,
        },
        {
          id: 2,
          answer:
            'კომპანიის ძირეულ რგოლებში დამკვიდრებული ეთიკური ურთიერთობის გავრცელებას ზედა რგოლებში',
          isCorrect: true,
        },
        {
          id: 3,
          answer:
            'საკანონმდებლო ნორმატიული დოკუმენტების გაცნობას კოლექტივისადმი',
          isCorrect: false,
        },
        {
          id: 4,
          answer: 'პერსონალის სურვილების მიწოდებას მენეჯმენტისადმი',
          isCorrect: false,
        },
      ],
    },
    {
      id: 47,
      question: 'ჩამოთვლილთაგან რომელია კორპორაციული კულტურის დონე',
      answers: [
        {
          id: 1,
          answer: 'მაღალი დონე',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'დაბალი დონე',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'უხილავი დონე',
          isCorrect: true,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 48,
      question:
        'ჩამოთვლილთაგან რომელი არ მიეკუთვნება კორპორაციული კულტურის ტიპს?',
      answers: [
        {
          id: 1,
          answer: 'ადაპტაციური',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ასერტული',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'კლანური',
          isCorrect: false,
        },
        { id: 4, answer: 'ბიუროკრატიული', isCorrect: false },
      ],
    },
    {
      id: 49,
      question: 'რას ნიშნავდა კულტურა თავდაპირველად?',
      answers: [
        {
          id: 1,
          answer: 'არისტოკრატთა ქცევის წესებს',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'მინდვრის დამუშავებას',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'ურთიერთობის ხელოვნებას',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
    {
      id: 50,
      question:
        'ჩამოთვლილთაგან რომელ მიმართულებას არ ითვალისწინებს საქმიან სამყაროში დამკვიდრებული ეთიკური ურთიერთობები?',
      answers: [
        {
          id: 1,
          answer: 'ურთიერთობას ზევიდან –ქვევით',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ურთიერთობას ქვევიდან ზევით',
          isCorrect: false,
        },
        {
          id: 3,
          answer: 'ურთიერთობას –ჰორიზონტალზე',
          isCorrect: false,
        },
        { id: 4, answer: 'შემოვლით ურთიერთობას', isCorrect: true },
      ],
    },
    {
      id: 51,
      question:
        'ჩამოთვლილთაგან რომელი არ მიეკუთვნება მენეჯერის კულტურის ტიპებს?',
      answers: [
        {
          id: 1,
          answer: 'მონოაქტიური კულტურის მმართველები',
          isCorrect: false,
        },
        {
          id: 2,
          answer: 'ადაპტაციური კულტურის მმართველები',
          isCorrect: true,
        },
        {
          id: 3,
          answer: 'რეაქციული კულტურის მმართველები',
          isCorrect: false,
        },
        { id: 4, answer: 'არც ერთი პასუხი არ არის სწორი', isCorrect: false },
      ],
    },
  ])

  if (quizNumber === questions.length) {
    setStep(3)
  }

  return (
    <div
      className="app container"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {step === 1 && (
        <HomePage setStep={setStep} setQuizNumber={setQuizNumber} />
      )}
      {step === 2 && (
        <QuizPage
          questions={questions}
          setQuestions={setQuestions}
          quizNumber={quizNumber}
          setQuizNumber={setQuizNumber}
          setStep={setStep}
        />
      )}
      {step === 3 && <EndPage setStep={setStep} />}
    </div>
  )
}

export default App
