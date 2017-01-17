import React from 'react';


class Introduction extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flip-container">
				<div className="flipper">
					<div className="front">
						名字：张有明
					</div>
					<div className="back">
						2
					</div>
				</div>
			</div>
		)
	}
}

export default Introduction