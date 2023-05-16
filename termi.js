@import url("https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

button,
input,
select {
	font-family: inherit;
	font-size: 100%;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

html {
	font-size: 12px;
}

body {
	color: #000;
	font-family: "Shippori Antique", sans-serif;
	height: 100vh;
	display: grid;
	place-items: center;
}

.content-wrapper {
	height: 100%;
	width: 70%;
	max-width: 100rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 5rem;
}

h1 {
	margin-bottom: calc(0.7rem + 0.5vmin);
	font-size: calc(2.3rem + 1vmin);
}

.blue-line {
	height: 0.3rem;
	width: 6rem;
	background-color: rgb(79, 143, 226);
	margin-bottom: calc(3rem + 2vmin);
}

.wrapper-for-arrows {
	position: relative;
	width: 70%;
	border-radius: 2rem;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	overflow: hidden;
	display: grid;
	place-items: center;
}

.review-wrap {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: calc(2rem + 1vmin);
	width: 100%;
}

#imgDiv {
	border-radius: 50%;
	width: calc(6rem + 4vmin);
	height: calc(6rem + 4vmin);
	position: relative;
	box-shadow: 5px -3px rgb(79, 143, 226);
	background-size: cover;
	margin-bottom: calc(0.7rem + 0.5vmin);
}

.chicken {
	background-image: url("https://media0.giphy.com/media/A8Cdznswn5vnG/200w.gif?cid=790b7611e8c5980ee7141bc18ec12c49962b871eb404ba5b&rid=200w.gif&ct=s");
	width: 200px;
	height: 250px;
	position: absolute;
	top: 12%;
}

#imgDiv::after {
	content: "''";
	font-size: calc(2rem + 2vmin);
	font-family: sans-serif;
	line-height: 150%;
	color: #fff;
	display: grid;
	place-items: center;
	border-radius: 50%;
	background-color: rgb(79, 143, 226);
	position: absolute;
	top: 10%;
	left: -10%;
	width: calc(2rem + 2vmin);
	height: calc(2rem + 2vmin);
}

#personName {
	margin-bottom: calc(0.7rem + 0.5vmin);
	font-size: calc(1rem + 0.5vmin);
	letter-spacing: calc(0.1rem + 0.1vmin);
	font-weight: bold;
}

#profession {
	font-size: calc(0.8rem + 0.3vmin);
	margin-bottom: calc(0.7rem + 0.5vmin);
	color: rgb(79, 143, 226);
}

#description {
	font-size: calc(0.8rem + 0.3vmin);
	width: 70%;
	max-width: 40rem;
	text-align: center;
	margin-bottom: calc(1.4rem + 1vmin);
	color: rgb(92, 92, 92);
	line-height: 2rem;
}

.arrow-wrap {
	position: absolute;
	top: 50%;
}

.arrow {
	width: calc(1.4rem + 0.6vmin);
	height: calc(1.4rem + 0.6vmin);
	border: solid rgb(79, 143, 226);
	border-width: 0 calc(0.5rem + 0.2vmin) calc(0.5rem + 0.2vmin) 0;
	cursor: pointer;
	transition: transform 0.3s;
}

.arrow:hover {
	transition: 0.3s;
	transform: scale(1.15);
}

.left-arrow-wrap {
	left: 5%;
	transform: rotate(135deg);
	-webkit-transform: rotate(135deg);
}

.right-arrow-wrap {
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	right: 5%;
}

.surprise-me-btn {
	border: 2px solid rgb(79, 143, 226);
	background-color: rgb(224, 238, 255);
	color: rgb(79, 143, 226);
	border-radius: 2rem;
	padding: calc(0.5rem + 0.2vmin) 0;
	width: calc(7rem + 5vmin);
	text-align: center;
	transition: background-color 0.3s, transform 0.3s;
	cursor: pointer;
	margin-bottom: calc(1.4rem + 1vmin);
}

.surprise-me-btn:hover {
	transition: background-color 0.3s, transform 0.3s;
	background-color: rgb(255, 255, 255);
	transform: rotate(5deg);
}

.move-head {
	animation: moveHead 1.55s infinite;
	animation-delay: -0.8s;
}

.hide-chicken-btn {
	border: 2px solid rgb(226, 89, 79);
	background-color: rgb(255, 224, 224);
	color: rgb(226, 79, 79);
	border-radius: 2rem;
	padding: calc(0.5rem + 0.2vmin) 0;
	width: calc(10rem + 5vmin);
	text-align: center;
	transition: background-color 0.3s, transform 0.3s;
	cursor: pointer;
	margin-bottom: calc(1.4rem + 1vmin);
}

.hide-chicken-btn:hover {
	transition: background-color 0.3s, transform 0.3s;
	background-color: rgb(255, 255, 255);
	transform: rotate(5deg);
}

@keyframes moveHead {
	0% {
	}
	25% {
		transform: translate(0.5rem, 1rem) rotate(5deg);
	}
	100% {
		transform: translate(0, 0) rotate(-5deg);
	}
}

@media screen and (max-width: 900px) {
	.content-wrapper {
		width: 100%;
	}
}
