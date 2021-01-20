import '../css/style.css';
import Filter from './filter.js';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			textInicial: new Date().valueOf(),
			textFinal: new Date().valueOf() + 3456000000, //40 dias
		};
	}
	render() {
		const filtros = (
			<Filter
				fechaInicial={this.state.textInicial}
				fechaFinal={this.state.textFinal}
				logo={'../images/logo2.png'}
			/>
		);
		return (
			<div>
				<div>{filtros}</div>
			</div>
		);
	}
}
