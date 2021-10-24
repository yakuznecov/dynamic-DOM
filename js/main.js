// Создать div
const div = document.createElement('div');

// Добавить к нему класс Wrapper
div.classList.add('wrapper');

// Поместить его внутрь body
const body = document.body;
body.appendChild(div);

// Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = 'DOM (Document Object Model)';

// Добавить h1 перед div с классом wrapper
div.insertAdjacentElement('beforebegin', header);

// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `
	<ul>
		<li>Один</li>
		<li>Два</li>
		<li>Три</li>
	</ul>
`;

// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;

// Создать изображение
const img = document.createElement('img');

// 1. Добавить атрибут source
img.src = 'https://picsum.photos/240';

// 2. Добавить артибут width со значением 240
img.width = 240;

// 3. Добавить класс super
img.classList.add('super');

// 4. Добавить свойство alt со значением 'Super Man'
img.alt = 'Super Man';

// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);

// Используя HTML строку, создать div с классом 'pDiv' + с 2-мя параграфами
const elemHTML = `
<div class="pDiv">
	<p>Параграф 1</p>
	<p>Параграф 2</p>
</div>`;

// Поместить div до элемента <ul></ul>
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);

// Добавить для 2-го параграфа класс text
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');

// Удалить первый параграф
pDiv.firstElementChild.remove();

// Создать функцию generateAutoCard, которая принимает 3 аргумента: brand, color, year
// Функция должна возвращать разметку HTML
const generateAutoCard = (brand, color, year) => {
	const curDate = new Date();
	const curYear = curDate.getFullYear();
	return `
		<div class="autocard">
			<h2>${brand.toUpperCase()} ${year}</h2>
			<p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curYear - year} лет.</p>
			<p>Цвет: ${color}</p>
			<button type="button" class="btn">Удалить</button>
		</div>
	`;
};

// Создать новый div с классом autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
	{ brand: 'Tesla', year: 2015, color: 'Красный' },
	{ brand: 'Lexus', year: 2016, color: 'Серебристый' },
	{ brand: 'Nissan', year: 2012, color: 'Чёрный' },
];

const carsHTML = carsList
	.map((car) => {
		return generateAutoCard(car.brand, car.color, car.year);
	})
	.join('');

// Поместить эти 3 карточки внутри div с классом autos
carsDiv.innerHTML = carsHTML;

// Поместить div с классом autos на страницу DOM до div с классом wrapper
div.insertAdjacentElement('beforebegin', carsDiv);

// Добавить кнопку удалить на каждую карточку авто
// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
const buttons = document.querySelectorAll('.btn');

// Создать функцию удаления
function handleClick(e) {
	const currentButton = e.currentTarget;
	currentButton.closest('.autocard').remove();
}

// Использовать цикл, чтобы повесить обработчик события на каждую кнопку
buttons.forEach((button) => {
	button.addEventListener('click', handleClick);
});
