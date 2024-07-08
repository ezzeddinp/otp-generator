import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const OtpGenerator: React.FC = () => {
	const [otp, setOtp] = useState<string>('');
	const [userInput, setUserInput] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean | null>(null); // bisa aja user ga input
	const [showOtpBox, setShowOtpBox] = useState<boolean>(false)

	const generateOtp = () => {
		let generatedOtp = ''; // pake let biar nilainya changeable
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (let i = 0; i < 6; i++) {
			generatedOtp += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		setOtp(generatedOtp);
		setIsValid(null); // karna blm di cek, baru digenerate doang
		setShowOtpBox(true)
	}

	const validateOtp = () => {
		if (userInput === otp) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.title}>
					Simple OTP Generator | Validator
				</Text>
				<TouchableOpacity style={styles.button} onPress={generateOtp}>
					<Text style={styles.buttonText}>
						Generate OTP
					</Text>
				</TouchableOpacity>
				{
					showOtpBox && (
						<View style={styles.otpBox}>
							<Text style={styles.otp}>
								{otp}
							</Text>
						</View>
					)
				}
				<TextInput
					style={styles.input}
					placeholder="Enter OTP"
					value={userInput}
					onChangeText={setUserInput}
				/>
				<TouchableOpacity style={styles.button} onPress={validateOtp}>
					<Text style={styles.buttonText}>
						Validate OTP
					</Text>
				</TouchableOpacity>
				{
					isValid === true && (
						<Text style={styles.validText}>
							OTP is valid
						</Text>
					)
				}
				{
					isValid === false && (
						<Text style={styles.invalidText}>
							OTP is invalid
						</Text>
					)
				}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black'
	},
	box: {
		width: '80%',
		backgroundColor: 'black',
		borderRadius: 10,
		padding: 20,
		shadowColor: '#FFF',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		color: 'white'
	},
	button: {
		backgroundColor: 'white',
		paddingHorizontal: 30,
		paddingVertical: 15,
		borderRadius: 5,
		marginTop: 20,
	},
	buttonText: {
		color: 'black',
		fontSize: 18,
		fontWeight: '500'
	},
	input: {
		borderWidth: 1,
		borderColor: '#007AFF',
		borderRadius: 5,
		color: 'white',
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginTop: 20,
		width: '100%',
	},
	otpBox: {
		marginTop: 20,
		backgroundColor: 'black',
		borderRadius: 5,
		padding: 10,
		borderWidth: 2,
		borderColor: 'green',
	},
	otp: {
		fontSize: 24,
		color: 'white'
	},
	validText: {
		fontSize: 20,
		color: 'green',
		marginTop: 20,
	},
	invalidText: {
		fontSize: 20,
		color: 'red',
		marginTop: 20,
	},
});

export default OtpGenerator