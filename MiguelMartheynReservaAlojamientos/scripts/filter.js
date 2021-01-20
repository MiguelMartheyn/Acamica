import moment from 'moment';
import 'moment/locale/es';
import Hotels from './hotels.js';
import '../css/style.css';

const today = new Date();
const hotelsData = [
	{
		slug: 'la-bamba-de-areco',
		name: 'La Bamba de Areco',
		photo: '../images/la-bamba-de-areco.jpg',
		description:
			'La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.',
		availabilityFrom: today.valueOf(),
		availabilityTo: today.valueOf() + 864000000, // 10 days
		rooms: 11, //Mediano
		city: 'Buenos Aires',
		country: 'Argentina',
		price: '$$$$',
	},
	{
		slug: 'sainte-jeanne',
		name: 'Sainte Jeanne Boutique & Spa',
		photo: '../images/sainte-jeanne.jpg',
		description:
			'Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.',
		availabilityFrom: today.valueOf() + 864000000, // 10 days
		availabilityTo: today.valueOf() + 1296000000, // 15 days
		rooms: 23, //Grande
		city: 'Mar del Plata',
		country: 'Argentina',
		price: '$$',
	},
	{
		slug: 'entre-cielos',
		name: 'Entre Cielos',
		photo: '../images/entre-cielos.jpg',
		description:
			'Ubicado en una de las regiones vitivinícolas más grandes de América Latina, Entre Cielos fue pensado y construido en un campo de 8 hectáreas rodeado de viñedos malbec y una imponente vista de la Cordillera de Los Andes.',
		availabilityFrom: today.valueOf() + 432000000, // 5 days
		availabilityTo: today.valueOf() + 1296000000, // 15 days
		rooms: 16, //Mediano
		city: 'Mendoza',
		country: 'Argentina',
		price: '$$$$',
	},
	{
		slug: 'huacalera',
		name: 'Hotel Huacalera',
		photo: '../images/huacalera.jpg',
		description:
			'Esta casona neocolonial, construida en la década de 1940, está ubicada en el corazón de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas montañosas, recorrido por el Río Grande y declarado Patrimonio de la Humanidad en 2003.',
		availabilityFrom: today.valueOf() + 1728000000, // 20 days
		availabilityTo: today.valueOf() + 2592000000, // 30 days
		rooms: 32, //Grande
		city: 'Jujuy',
		country: 'Argentina',
		price: '$',
	},
	{
		slug: 'merced-del-alto',
		name: 'La Merced del Alto',
		photo: '../images/merced-del-alto.jpg',
		description:
			'Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, ríos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaquíes o simplemente a disfrutar de la paz del lugar.',
		availabilityFrom: today.valueOf(),
		availabilityTo: today.valueOf() + 432000000, // 5 days
		rooms: 14, //Mediano
		city: 'Salta',
		country: 'Argentina',
		price: '$$',
	},
	{
		slug: 'azur-real',
		name: 'Azur Real Hotel',
		photo: '../images/azur-real.jpg',
		description:
			'La exclusividad rodeada de historia. Azur Real Hotel Boutique está ubicado en el corazón de la zona comercial y el centro histórico de Córdoba, dentro de uno de los principales circuitos culturales y turísticos de la ciudad.',
		availabilityFrom: today.valueOf() + 1296000000, // 15 days
		availabilityTo: today.valueOf() + 2592000000, // 30 days
		rooms: 16, //Mediano
		city: 'Córdoba',
		country: 'Argentina',
		price: '$',
	},
	{
		slug: 'rincon-del-socorro',
		name: 'Rincón del Socorro',
		photo: '../images/rincon-del-socorro.jpg',
		description:
			'Rincón del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iberá, un santuario de vida silvestre, donde la Fundación Conservation Land Trust decidió desarrollar un ambicioso proyecto de recuperación y conservación.',
		availabilityFrom: today.valueOf() + 432000000, // 5 days
		availabilityTo: today.valueOf() + 1296000000, // 15 days
		rooms: 11, //Mediano
		city: 'Corrientes',
		country: 'Argentina',
		price: '$$',
	},
	{
		slug: 'luma-casa-de-montana',
		name: 'Luma Casa de Montaña',
		photo: '../images/luma-casa-de-montana.jpg',
		description:
			'Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Montaña se presenta majestuosa pero a la vez simple y hogareña: un lugar diferente, atemporal y mágico.',
		availabilityFrom: today.valueOf(),
		availabilityTo: today.valueOf() + 1296000000, // 15 days
		rooms: 8, //Pequeño
		city: 'Villa La Angostura',
		country: 'Argentina',
		price: '$$',
	},
	{
		slug: 'casa-turquesa',
		name: 'Casa Turquesa',
		photo: '../images/casa-turquesa.jpg',
		description:
			'Casa Turquesa es una histórica mansión del siglo XVIII que recrea el encanto típico de Paraty, una de las herencias coloniales más bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.',
		availabilityFrom: today.valueOf(),
		availabilityTo: today.valueOf() + 432000000, // 5 days
		rooms: 9, //Pequeño
		city: 'Río de Janeiro',
		country: 'Brasil',
		price: '$$',
	},
	{
		slug: 'vila-da-santa',
		name: 'Vila Da Santa',
		photo: '../images/vila-da-santa.jpg',
		description:
			'Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su espíritu original. Se abre a un gran patio central con dos piscinas de diseño, una de ellas climatizada.',
		availabilityFrom: today.valueOf() + 864000000, // 10 days
		availabilityTo: today.valueOf() + 1296000000, // 15 days
		rooms: 19, //Mediano
		city: 'Buzios',
		country: 'Brasil',
		price: '$$$',
	},
	{
		slug: 'uxua-casa',
		name: 'UXUA Casa Hotel & Spa',
		photo: '../images/uxua-casa.jpg',
		description:
			'UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extraídos de la selva.',
		availabilityFrom: today.valueOf(),
		availabilityTo: today.valueOf() + 864000000, // 10 days
		rooms: 11, //Mediano
		city: 'Bahía',
		country: 'Brasil',
		price: '$$$$',
	},
	{
		slug: 'ponta-dos-ganchos',
		name: 'Ponta dos Ganchos',
		photo: '../images/ponta-dos-ganchos.jpg',
		description:
			'Ubicado a pasos de San Pablo, Río de Janeiro, e incluso Buenos Aires, en una península privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa más exclusivos del sur de Brasil.',
		availabilityFrom: today.valueOf() + 432000000, // 5 days
		availabilityTo: today.valueOf() + 864000000, // 10 days
		rooms: 25, //Grande
		city: 'Santa Catarina',
		country: 'Brasil',
		price: '$$$$',
	},
	{
		slug: 'alto-atacama',
		name: 'Alto Atacama',
		photo: '../images/alto-atacama.jpg',
		description:
			'Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukará de Quitor en el imponente desierto de Atacama al norte de Chile.',
		availabilityFrom: today.valueOf(),
		availabilityTo: today.valueOf() + 864000000, // 10 days
		rooms: 42, //Grande
		city: 'San Pedro de Atacama',
		country: 'Chile',
		price: '$$$$',
	},
	{
		slug: 'tierra-patagonia',
		name: 'Tierra Patagonia',
		photo: '../images/tierra-patagonia.jpg',
		description:
			'Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de montañas, cascadas, glaciares, lagos y peñascos, declarado Reserva de la Biosfera por la UNESCO en 1978.',
		availabilityFrom: today.valueOf() + 2592000000, // 30 days
		availabilityTo: today.valueOf() + 3456000000, // 40 days
		rooms: 40, //Grande
		city: 'Torres del Paine',
		country: 'Chile',
		price: '$$$$',
	},
	{
		slug: 'vira-vira',
		name: 'Vira Vira',
		photo: '../images/vira-vira.jpg',
		description:
			'Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicación privilegiada, muy cerca de Pucón, Chile. Su impresionante parque nativo de 23 hectáreas a orillas del río Liucura ofrece un oasis único de paz y tranquilidad.',
		availabilityFrom: today.valueOf() + 864000000, // 10 days
		availabilityTo: today.valueOf() + 1728000000, // 20 days
		rooms: 21, //Grande
		city: 'Pucón',
		country: 'Chile',
		price: '$$$$',
	},
	{
		slug: 'vik-chile',
		name: 'Vik Chile',
		photo: '../images/vik-chile.jpg',
		description:
			'Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el diseño de vanguardia, una ubicación sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atención por el medioambiente.',
		availabilityFrom: today.valueOf() + 432000000, // 5 days
		availabilityTo: today.valueOf() + 1728000000, // 20 days
		rooms: 22, //Grande
		city: 'Millahue',
		country: 'Chile',
		price: '$$$$',
	},
	{
		slug: 'casa-higueras',
		name: 'Casa Higueras',
		photo: '../images/casa-higueras.jpg',
		description:
			'Ubicada en el corazón del Cerro Alegre, frente a la imponente bahía de Valparaíso, se encuentra Casa Higueras, el primer hotel boutique y de diseño del puerto.',
		availabilityFrom: today.valueOf() + 432000000, // 5 days
		availabilityTo: today.valueOf() + 1296000000, // 15 days
		rooms: 20, //Mediano
		city: 'Valparaíso',
		country: 'Chile',
		price: '$$$$',
	},
	{
		slug: 'campo-tinto',
		name: 'Campo Tinto',
		photo: '../images/campo-tinto.jpg',
		description:
			'Campo Tinto es una chacra de 25 hectáreas ubicada en el corazón de San Roque, en medio del ondulante Carmelo, una zona de chacras, viñedos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.',
		availabilityFrom: today.valueOf() + 2160000000, // 25 days
		availabilityTo: today.valueOf() + 2592000000, // 30 days
		rooms: 4, //Pequeño
		city: 'Colonia',
		country: 'Uruguay',
		price: '$',
	},
];

export default class Filter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fechaInicial: this.props.fechaInicial,
			fechaFinal: this.props.fechaFinal,
			hotels: hotelsData,
			hotelsFilter: [],
		};
	}

	handleFechaInicialChange(e) {
		this.setState({ fechaInicial: e.target.value });
	}
	handleFechaFinalChange(e) {
		this.setState({ fechaFinal: e.target.value });
	}

	filterSizes(selectedSizes) {
		if (selectedSizes === 'Hotel pequeno') {
			this.setState({
				hotels: this.state.hotelsFilter.filter((sizes) => sizes.rooms <= 10),
			});
		}
		if (selectedSizes === 'Hotel mediano') {
			this.setState({
				hotels: this.state.hotelsFilter.filter(
					(sizes) => sizes.rooms > 10 && sizes.rooms <= 20
				),
			});
		}
		if (selectedSizes === 'Hotel grande') {
			this.setState({
				hotels: this.state.hotelsFilter.filter((sizes) => sizes.rooms > 20),
			});
		}
		console.log('');
		console.log('------------ Filtro- zises-------------');
	}

	handleFilters() {
		var comboCountry = document.getElementById('country');
		var selectedCountry = comboCountry.options[comboCountry.selectedIndex].text;
		var comboPrices = document.getElementById('prices');
		var selectedPrices = comboPrices.options[comboPrices.selectedIndex].text;
		var comboSizes = document.getElementById('sizes');
		var selectedSizes = comboSizes.options[comboSizes.selectedIndex].text;
		console.log(selectedCountry);
		console.log(selectedPrices);
		console.log(selectedSizes);
		/*Primera Condicion */
		if (
			selectedCountry === 'Todos los Paises' &&
			selectedPrices === 'Cualquier Precio' &&
			selectedSizes === 'Cualquier Tamano'
		) {
			this.setState({
				hotels: hotelsData,
			});
			console.log('------Primera Condicion-------');
		}
		/*Segunda Condicion */
		if (
			selectedCountry === 'Todos los Paises' &&
			selectedPrices === 'Cualquier Precio' &&
			selectedSizes !== 'Cualquier Tamano'
		) {
			setTimeout(() => {
				this.setState({
					hotelsFilter: hotelsData,
				});
				console.log('------Segunda Condicion-------');

				this.filterSizes(selectedSizes);
			}, 500);
		}
		/*Tercera Condicion*/
		if (
			selectedCountry === 'Todos los Paises' &&
			selectedPrices !== 'Cualquier Precio' &&
			selectedSizes === 'Cualquier Tamano'
		) {
			this.setState({
				hotels: hotelsData.filter((filter) => filter.price === selectedPrices),
			});
			console.log('------Tercera Condicion-------');
		}
		/*Cuarta Condicion*/
		if (
			selectedCountry === 'Todos los Paises' &&
			selectedPrices !== 'Cualquier Precio' &&
			selectedSizes !== 'Cualquier Tamano'
		) {
			setTimeout(() => {
				this.setState({
					hotelsFilter: hotelsData.filter(
						(filter) => filter.price === selectedPrices
					),
				});
				console.log('------Cuarta Condicion-------');

				this.filterSizes(selectedSizes);
			}, 500);
		}
		/*Quinta Condicion*/
		if (
			selectedCountry !== 'Todos los Paises' &&
			selectedPrices === 'Cualquier Precio' &&
			selectedSizes === 'Cualquier Tamano'
		) {
			this.setState({
				hotels: hotelsData.filter(
					(filter) => filter.country === selectedCountry
				),
			});
			console.log('------Quinta Condicion-------');
		}
		/*Sexta Condicion*/
		if (
			selectedCountry !== 'Todos los Paises' &&
			selectedPrices === 'Cualquier Precio' &&
			selectedSizes !== 'Cualquier Tamano'
		) {
			setTimeout(() => {
				this.setState({
					hotelsFilter: hotelsData.filter(
						(filter) => filter.country === selectedCountry
					),
				});
				console.log('------Sexta Condicion-------');

				this.filterSizes(selectedSizes);
			}, 500);
		}
		/*Septima Condicion*/
		if (
			selectedCountry !== 'Todos los Paises' &&
			selectedPrices !== 'Cualquier Precio' &&
			selectedSizes === 'Cualquier Tamano'
		) {
			this.setState({
				hotels: hotelsData.filter(
					(filter) =>
						filter.country === selectedCountry &&
						filter.price === selectedPrices
				),
			});
			console.log('------Septima Condicion-------');
		}
		/*Octava Condicion*/
		if (
			selectedCountry !== 'Todos los Paises' &&
			selectedPrices !== 'Cualquier Precio' &&
			selectedSizes !== 'Cualquier Tamano'
		) {
			setTimeout(() => {
				this.setState({
					hotelsFilter: hotelsData.filter(
						(filter) =>
							filter.country === selectedCountry &&
							filter.price === selectedPrices
					),
				});
				console.log('------Octava Condicion-------');

				this.filterSizes(selectedSizes);
			}, 500);
		}
	}

	render() {
		moment.locales('es');

		var dateTime1 = moment(this.state.fechaInicial);
		// formato de fecha
		var full1 = dateTime1.format('dddd D, MMMM YYYY');

		var dateTime2 = moment(this.state.fechaFinal);
		// formato de fecha
		var full2 = dateTime2.format('dddd D, MMMM YYYY');

		const hotelsOrder = this.state.hotels.sort((a, b) => a.rooms - b.rooms);
		const hotelsFilterFecha = hotelsOrder.filter(
			(filter) =>
				filter.availabilityFrom >= dateTime1 &&
				filter.availabilityTo <= dateTime2
		);
		const hotels =
			hotelsFilterFecha.length > 0 ? (
				hotelsFilterFecha.map((hotels) => (
					<Hotels
						slug={hotels.slug}
						key={hotels.slug}
						photo={hotels.photo}
						name={hotels.name}
						description={hotels.description}
						city={hotels.city}
						country={hotels.country}
						rooms={hotels.rooms}
						price={hotels.price}
					/>
				))
			) : (
				<h1>
					No hay hoteles disponibles con las caracteristicas seleccionadas
				</h1>
			);

		return (
			<React.Fragment>
				<div className='header_container'>
					<header className='header'>
						<section className='header_logo'>
							<img
								className='logo_image'
								src={this.props.logo}
								alt={this.props.logo}
							/>
						</section>
						<section className='filters_header'>
							<form className='container_countries'>
								<div>
									<label name='country' />
									<select
										className='select_country'
										id='country'
										name='country'
										defaultValue='Todos los Paises'
										onChange={this.handleFilters.bind(this)}
									>
										<option>Todos los Paises</option>
										<option>Argentina</option>
										<option>Brasil</option>
										<option>Chile</option>
										<option>Uruguay</option>
									</select>
								</div>
							</form>

							<form className='container_prices'>
								<div>
									<label name='prices' />
									<select
										className='select_prices'
										id='prices'
										name='prices'
										defaultValue='Cualquier Precio'
										onChange={this.handleFilters.bind(this)}
									>
										<option>Cualquier Precio</option>
										<option>$</option>
										<option>$$</option>
										<option>$$$</option>
										<option>$$$$</option>
									</select>
								</div>
							</form>

							<form className='container_sizes'>
								<div>
									<label name='sizes' />
									<select
										className='select_sizes'
										id='sizes'
										name='sizes'
										defaultValue='Cualquier Tamano'
										onChange={this.handleFilters.bind(this)}
									>
										<option>Cualquier Tamano</option>
										<option>Hotel pequeno</option>
										<option>Hotel mediano</option>
										<option>Hotel grande</option>
									</select>
								</div>
							</form>
						</section>
					</header>

					<section className='filters_fecha'>
						<div className='filter_description_main'>
							<h3>Tus</h3>
							<h2>
								Vacaciones <strong>ideales</strong>
							</h2>
						</div>

						<div className='filter_fecha'>
							<form className='fecha_inicial'>
								<h3>Ida</h3>
								<div className='container-fechaIn'>
									<label name='bday' />
									<input
										className='fechaIn'
										type='date'
										id='bday'
										name='bday'
										value={this.state.fechaInicial}
										required
										pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
										onChange={this.handleFechaInicialChange.bind(this)}
									/>
									<span className='validity' />
								</div>
							</form>

							<form className='fecha_final'>
								<h3>Vuelta</h3>
								<div className='container-fechaOut'>
									<label name='bday' />
									<input
										className='fechaOut'
										type='date'
										id='bday'
										name='bday'
										value={this.state.fechaFinal}
										required
										pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
										onChange={this.handleFechaFinalChange.bind(this)}
									/>
									<span className='validity' />
								</div>
							</form>
						</div>
					</section>
					<div className='filter_description'>
						<p>
							<small>Desde el </small>
							<strong>{full1}</strong>,<small> hasta el </small>
							<strong>{full2}</strong>
						</p>
					</div>
					<div className='filter_description_down'>
						<div className='border_underline'></div>
						<h2>
							<small>Nuestros </small>
							<strong>Hoteles</strong>
						</h2>
						<p>Muy acogedores y especiales</p>
					</div>
				</div>
				<div className='hotels'>{hotels}</div>
			</React.Fragment>
		);
	}
}
