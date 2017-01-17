import React from 'react';


class Cat extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="mao_box">
				<div className="mao">
					<div className="mao_head">
						<div className="huawen">
							<div></div>
						</div>
					</div>
					<div className="erduo">
						<div></div>
						<div></div>
					</div>
					<div className="yanjing">
						<div>
							<div className="yanquan">
								<div></div>
							</div>
							<div className="yanquan_hedding">

							</div>
							<div className="hong"></div>
						</div>
						<div className="yan_right">
							<div className="yanquan">
								<div></div>
							</div>
							<div className="yanquan_hedding">

							</div>
							<div className="hong"></div>
						</div>
						<div className="qingchu"></div>
					</div>
					<div className="face_huawen">
						<div className="face_huawen_huawen huawen_left">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>

						</div>
						<div className="face_huawen_huawen huawen_right">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>

						</div>
						<div className="qingchu"></div>
					</div>
					<div className="bizi">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className="zuiba_box">
						<div className="zuiba">
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
				<div className="milky">
					我就静静的看着你~
				</div>
			</div>
		)
	}
}

export default Cat