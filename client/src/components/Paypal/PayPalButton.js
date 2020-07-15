import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import { Link } from 'react-router-dom';
const CLIENT = {
	sandbox:
		process.env.REACT_APP_API_KEY_SANDBOX,
	production:
		process.env.REACT_APP_API_KEY_PRODUCTION
};

console.log("this is client", CLIENT)

const CLIENT_ID =
	process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;

class PaypalButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showButtons: false,
			loading: true,
			paid: false,
		};

		window.React = React;
		window.ReactDOM = ReactDOM;
	}

	componentDidMount() {
		const { isScriptLoaded, isScriptLoadSucceed } = this.props;

		if (isScriptLoaded && isScriptLoadSucceed) {
			PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
			this.setState({ loading: false, showButtons: true });
		}
	}

	componentWillReceiveProps(nextProps) {
		const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

		const scriptJustLoaded =
			!this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

		if (scriptJustLoaded) {
			if (isScriptLoadSucceed) {
				PayPalButton = window.paypal.Buttons.driver("react", {
					React,
					ReactDOM
				});
				this.setState({ loading: false, showButtons: true });
			}
		}
	}
	createOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					description: + "The Package",
					amount: {
						currency_code: "USD",
						value: this.props.price
					}
				}
			]
		});
	};

	onApprove = (data, actions) => {
		actions.order.capture().then(details => {
			const paymentData = {
				payerID: data.payerID,
				orderID: data.orderID
			};
			console.log("Payment Approved: ", paymentData);
			this.setState({ showButtons: false, paid: true });
		});
	};

	render() {
		const { showButtons, paid } = this.state;

		return (
			<div className="main">
				{showButtons && (
					<div>
						<div>
							<h2>{this.props.nick_name}</h2>
				<h2>Total checkout Amount {this.props.value}</h2>
						</div>
						<PayPalButton
							createOrder={(data, actions) => this.createOrder(data, actions)}
							onApprove={(data, actions) => this.onApprove(data, actions)}
						/>
					</div>
				)}

				{paid && (
					<div className="main">
						{/* <img alt="Mercedes G-Wagon" src={Car} /> */}
						<h2>
							{`Thank you for your purchase! We will follow up with you!`}{" "}
							
							<span role="img" aria-label="emoji">
								{" "}
                			😉
              				</span>
							<Link to="/customer/profile"><br/>Back to Profile</Link>
						</h2>
					</div>
				)}
			</div>
		);
	}
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=AZtWTqU1qtntI0ygpgR73nf0CzWA4-N71CAOVeUU2whqdiMhPGw4QnpKf0-OPd7KJIgOZ04nnjY9645z`)(PaypalButton);

// Payment Approved:  
// {payerID: "XB2GZGFRRVQJS", orderID: "10168667T5646802D"}
// orderID: "10168667T5646802D"
// payerID: "XB2GZGFRRVQJS"
// __proto__: Object