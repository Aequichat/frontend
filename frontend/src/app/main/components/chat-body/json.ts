import { Story } from 'src/app/shared/models/story.model'

const storyJson: Story = {
	"name": "El estudiante nuevo",
	"chatName": "El parche 2020",
	"icon": "https://ak.picdn.net/shutterstock/videos/5118950/thumb/1.jpg",
	"characters": {
		"michael": {
			"name": "Michael",
			"color": "#35cd96"
		},
		"daniel": {
			"name": "Daniel",
			"color": "#91ab01"
		},
		"pedro": {
			"name": "Pedro",
			"color": "#ffa97a"
		},
		"nicolas": {
			"name": "Nicolás",
			"color": "#6bcbef"
		}
	},
	"events": {
		"0": {
			"type": "action",
			"child": "2",
			"subtype": "create",
			"from": "michael"
		},
		"2": {
			"type": "action",
			"child": "3",
			"subtype": "add",
			"from": "michael",
			"to": "user"
		},
		"3": {
			"type": "text",
			"child": "4",
			"value": "Listo muchachos, ya estamos todos, qué tal las vacaciones?",
			"from": "michael",
			"timestamp": "22:08"
		},
		"4": {
			"type": "text",
			"child": "5",
			"value": "Estuvieron buenísimas, no quiero volver al colegio",
			"from": "daniel",
			"timestamp": "22:09"
		},
		"5": {
			"type": "text",
			"child": "6",
			"value": "Sí parce, que pereza &#128531;",
			"from": "pedro",
			"timestamp": "22:09"
		},
		"6": {
			"type": "text",
			"child": "7",
			"value": "x2 &#128531;",
			"from": "user",
			"timestamp": "22:10"
		},
		"7": {
			"type": "text",
			"child": "8",
			"value": "Oigan, todos quedamos en el mismo salón? Yo quedé en 10-1",
			"from": "michael",
			"timestamp": "22:12"
		},
		"8": {
			"type": "text",
			"child": "9",
			"value": "10-1",
			"from": "pedro",
			"timestamp": "22:12"
		},
		"9": {
			"type": "text",
			"child": "10",
			"value": "Yo también &#129395;",
			"from": "user",
			"timestamp": "22:12"
		},
		"10": {
			"type": "text",
			"child": "11",
			"value": "Y yo!",
			"from": "daniel",
			"timestamp": "22:13"
		},
		"11": {
			"type": "text",
			"child": "12",
			"value": "Esooo &#128170; bueno muchachos, nos vemos mañana entonces",
			"from": "pedro",
			"timestamp": "22:13"
		},
		"12": {
			"type": "text",
			"child": "13",
			"value": "Listo, que descansen",
			"from": "daniel",
			"timestamp": "22:14"
		},
		"13": {
			"type": "fadeOut",
			"child": "13_1",
			"value": "Al dia siguiente..."
		},
		"14": {
			"type": "fadeIn",
			"child": "15"
		},
		"15": {
			"type": "text",
			"child": "16",
			"value": "Venga, quién me pasa la tarea?",
			"from": "pedro",
			"timestamp": "18:14"
		},
		"16": {
			"type": "options",
			"options": [{
				"label": "Cuál tarea?",
				"child": "16_1"
			}, {
				"label": "Tranquilo, no creo que la revisen",
				"child": "16_2"
			}],
			"timestamp": "18:15"
		},
		"17": {
			"type": "text",
			"child": "18",
			"value": "Parce, llegó mucha gente nueva este año",
			"from": "michael",
			"timestamp": "18:16"
		},
		"18": {
			"type": "text",
			"child": "19",
			"value": "La chica que me tocó al lado está super linda &#128525;",
			"from": "pedro",
			"timestamp": "18:17"
		},
		"19": {
			"type": "text",
			"child": "20",
			"value": "Ese era mi puesto &#128544;",
			"from": "michael",
			"timestamp": "18:17"
		},
		"20": {
			"type": "text",
			"child": "21",
			"value": "Yo llegué antes, mala suerte jajaja",
			"from": "pedro",
			"timestamp": "18:18"
		},
		"21": {
			"type": "text",
			"child": "22",
			"value": "&#128530;",
			"from": "michael",
			"timestamp": "18:18"
		},
		"22": {
			"type": "text",
			"child": "23",
			"value": "Venga, y sí vieron al marica?",
			"from": "michael",
			"timestamp": "18:20"
		},
		"23": {
			"type": "options",
			"parameter": "mockedNicolas",
			"options": [{
				"label": "Jajaja sí, el pelirrojo ese?",
				"child": "23_1",
				"value": true
			}, {
				"label": "El pelirrojo? Tampoco le digas así...",
				"child": "23_2",
				"value": false
			}],
			"timestamp": "18:21"
		},
		"24": {
			"type": "text",
			"child": "25",
			"value": "Oigan la tareaaa &#128557; alguien pásemela",
			"from": "pedro",
			"timestamp": "18:25"
		},
		"25": {
			"type": "text",
			"child": "26",
			"value": "Vale ya te la paso, pero mañana me compras una empanada",
			"from": "daniel",
			"timestamp": "18:26"
		},
		"26": {
			"type": "text",
			"child": "26_5",
			"value": "Sí sí, solo pásamela y arreglamos",
			"from": "pedro",
			"timestamp": "18:26"
		},
		"27": {
			"type": "text",
			"child": "28",
			"value": "Alguien quiere jugar LoL?",
			"from": "daniel",
			"timestamp": "18:40"
		},
		"28": {
			"type": "text",
			"child": "29",
			"value": "Yo juego",
			"from": "michael",
			"timestamp": "18:41"
		},
		"29": {
			"type": "text",
			"child": "30",
			"value": "Sí, yo igual",
			"from": "user",
			"timestamp": "18:41"
		},
		"30": {
			"type": "text",
			"child": "31",
			"value": "Vale, pero no invites al novio &#128514;",
			"from": "michael",
			"timestamp": "18:42",
			"condition": [{
				"label": "mockedNicolas",
				"value": true
			}]
		},
		"31": {
			"type": "fadeOut",
			"child": "32",
			"value": "Algunos días más tarde..."
		},
		"32": {
			"type": "action",
			"child": "33",
			"subtype": "newDate",
			"value": "FEB 11"
		},
		"33": {
			"type": "fadeIn",
			"child": "34"
		},
		"34": {
			"type": "text",
			"child": "35",
			"value": "Oigan, quién le dio mi número al invertido?",
			"from": "michael",
			"timestamp": "19:41",
			"condition": [{
				"label": "mockedNicolas",
				"value": true
			}]
		},
		"35": {
			"type": "text",
			"child": "36",
			"value": "Oigan, quién le dio mi número al pelirrojo?",
			"from": "michael",
			"timestamp": "19:41",
			"condition": [{
				"label": "mockedNicolas",
				"value": false
			}]
		},
		"36": {
			"type": "text",
			"child": "37",
			"value": "Se llama Nicolás, y fui yo. Me dijo que lo necesitaba para confirmar algo de un trabajo",
			"from": "pedro",
			"timestamp": "19:44"
		},
		"37": {
			"type": "text",
			"child": "38",
			"value": "Pedro, nunca en la vida vuelvas a hacer eso. Ahora voy a tener que aguantarlo...",
			"from": "michael",
			"timestamp": "19:45"
		},
		"38": {
			"type": "text",
			"child": "39",
			"value": "Si necesita algo, que me diga en el colegio, o que le diga a alguien más &#128530;",
			"from": "michael",
			"timestamp": "19:45"
		},
		"39": {
			"type": "text",
			"child": "40",
			"value": "Con mensajitos empezaron papá y mamá &#128584;",
			"from": "daniel",
			"timestamp": "19:47"
		},
		"40": {
			"type": "text",
			"child": "41",
			"value": "&#129314;&#129314;",
			"from": "michael",
			"timestamp": "19:48"
		},
		"41": {
			"type": "options",
			"parameter": "mockedNicolas",
			"options": [{
				"label": "Además, que tal que tengan química? &#128521;",
				"child": "41_1",
				"value": true
			}, {
				"label": "Tampoco es para tanto &#128580;",
				"child": "41_2",
				"value": false
			}],
			"timestamp": "19:49"
		},
		"42": {
			"type": "fadeOut",
			"child": "43",
			"value": "Al día siguiente..."
		},
		"43": {
			"type": "action",
			"child": "44",
			"subtype": "newDate",
			"value": "FEB 12"
		},
		"44": {
			"type": "fadeIn",
			"child": "45"
		},
		"45": {
			"type": "text",
			"child": "46",
			"value": "Muchachos, hoy venía caminando a casa cuando vi al pelirrojo hablando con otro hombre en un café &#128558;",
			"from": "daniel",
			"timestamp": "15:22"
		},
		"46": {
			"type": "text",
			"child": "47",
			"value": "Jajajaja en serio? Si los vuelve a ver tómeles una fotoooo",
			"from": "michael",
			"timestamp": "15:23"
		},
		"47": {
			"type": "text",
			"child": "48",
			"value": "Qué pereza tener a esa gente en el colegio...",
			"from": "michael",
			"timestamp": "15:23"
		},
		"48": {
			"type": "options",
			"parameter": "pictureBehavior",
			"options": [{
				"label": "Jajaja sí, yo edito la foto",
				"child": "48_1",
				"value": "editPicture"
			}, {
				"label": "Déjenlo tranquilo, lo que él haga no les afecta",
				"child": "48_2",
				"value": "defendNicolas"
			}, {
				"label": "Hagan lo que quieran, pero a mí no me involucren",
				"child": "48_3",
				"value": "stepBack"
			}],
			"timestamp": "15:25"
		},
		"49": {
			"type": "fadeOut",
			"child": "50",
			"value": "Al día siguiente..."
		},
		"50": {
			"type": "action",
			"child": "51",
			"subtype": "newDate",
			"value": "FEB 13"
		},
		"51": {
			"type": "fadeIn",
			"child": "52"
		},
		"52": {
			"type": "text",
			"child": "53",
			"value": "Muchachos tengo la foto!",
			"from": "pedro",
			"timestamp": "19:10"
		},
		"53": {
			"type": "image",
			"child": "54",
			"value": "https://delete-me-after-globhack.s3-sa-east-1.amazonaws.com/coffe-pic.png",
			"from": "daniel",
			"timestamp": "19:11"
		},
		"54": {
			"type": "text",
			"child": "55",
			"value": "Jajaja eso! Ya la edito y se las paso",
			"from": "user",
			"timestamp": "19:12",
			"condition": [{
				"label": "pictureBehavior",
				"value": "editPicture"
			}]
		},
		"55": {
			"type": "text",
			"child": "56",
			"value": "Perfecto, se la voy a reenviar a todos",
			"from": "michael",
			"timestamp": "19:13"
		},
		"56": {
			"type": "text",
			"child": "57",
			"value": "Vamos a sacar a la loca del colegio &#127881;",
			"from": "michael",
			"timestamp": "19:14"
		},
		"57": {
			"type": "text",
			"child": "58",
			"value": "Muchachos...",
			"from": "user",
			"timestamp": "19:15",
			"condition": [{
				"label": "pictureBehavior",
				"value": "stepBack"
			}]
		},
		"58": {
			"type": "text",
			"child": "59",
			"value": "Tú dijiste que no te ibas a meter, no? Pues no te metas.",
			"from": "michael",
			"timestamp": "19:15",
			"condition": [{
				"label": "pictureBehavior",
				"value": "stepBack"
			}]
		},
		"59": {
			"type": "fadeOut",
			"child": "60",
			"value": "Unos días más tarde..."
		},
		"60": {
			"type": "action",
			"child": "61",
			"subtype": "newDate",
			"value": "FEB 18"
		},
		"61": {
			"type": "fadeIn",
			"child": "62"
		},
		"62": {
			"type": "text",
			"child": "63",
			"value": "Misión cumplida muchachos, ya todos en el colegio saben lo del invertido",
			"from": "michael",
			"timestamp": "18:36"
		},
		"63": {
			"type": "text",
			"child": "64",
			"value": "&#129395;&#129395;&#129395;",
			"from": "user",
			"timestamp": "18:37",
			"condition": [{
				"label": "pictureBehavior",
				"value": "editPicture"
			}]
		},
		"64": {
			"type": "text",
			"child": "65",
			"value": "Esa loca no va a aguantar el bullying jajaja",
			"from": "michael",
			"timestamp": "18:37",
			"condition": [{
				"label": "pictureBehavior",
				"value": "editPicture"
			}]
		},
		"65": {
			"type": "text",
			"child": "66",
			"value": "Sí parce, todo el mundo lo está molestando",
			"from": "daniel",
			"timestamp": "18:38",
			"condition": [{
				"label": "pictureBehavior",
				"value": "editPicture",
				"child": "final1"
			}]
		},
		"66": {
			"type": "text",
			"child": "67",
			"value": "Yo sé que dije que no me iba a meter, pero creo que se pasaron. Hoy escuché a Nicolás llorando en el baño.",
			"from": "user",
			"timestamp": "18:39",
			"condition": [{
				"label": "pictureBehavior",
				"value": "stepBack"
			}]
		},
		"67": {
			"type": "text",
			"child": "68",
			"value": "&#128529;&#128529;",
			"from": "michael",
			"timestamp": "18:39",
			"condition": [{
				"label": "pictureBehavior",
				"value": "stepBack"
			}]
		},
		"68": {
			"type": "text",
			"child": "69",
			"value": "&#128580;&#128580;",
			"from": "daniel",
			"timestamp": "18:40",
			"condition": [{
				"label": "pictureBehavior",
				"value": "stepBack"
			}]
		},
		"69": {
			"type": "options",
			"parameter": "talkedToNicolas",
			"options": [{
				"label": "<b>Hablar con Nicolás</b>",
				"child": "final2",
				"value": true
			}, {
				"label": "<b>No hacer nada</b>",
				"child": "final1",
				"value": false
			}],
			"skipText": true
		},
		"13_1": {
			"type": "action",
			"child": "14",
			"subtype": "newDate",
			"value": "FEB 9"
		},
		"16_1": {
			"type": "text",
			"child": "17",
			"value": "Jajaja este tampoco hizo nada &#129315;",
			"from": "pedro",
			"timestamp": "18:15"
		},
		"16_2": {
			"type": "text",
			"child": "17",
			"value": "Sí, cálmate Pedro, acabamos de comenzar clases",
			"from": "daniel",
			"timestamp": "18:15"
		},
		"23_1": {
			"type": "text",
			"child": "23_1_1",
			"value": "Sí parce, habla muy gay, se nota que le gustan los hombres",
			"from": "michael",
			"timestamp": "18:22"
		},
		"23_1_1": {
			"type": "text",
			"child": "23_1_2",
			"value": "Toca a metros de ese man &#128541;",
			"from": "daniel",
			"timestamp": "18:22"
		},
		"23_1_2": {
			"type": "text",
			"child": "23_1_3",
			"value": "Obvio, que tal que luego uno le guste... cómo se lo quita uno de encima &#128560;",
			"from": "user",
			"timestamp": "18:23"
		},
		"23_1_3": {
			"type": "text",
			"child": "24",
			"value": "Jajajajaj",
			"from": "daniel",
			"timestamp": "18:24"
		},
		"23_2": {
			"type": "text",
			"child": "23_2_1",
			"value": "Pero qué, te gustó? jajajaja",
			"from": "michael",
			"timestamp": "18:22"
		},
		"23_2_1": {
			"type": "text",
			"child": "23_2_2",
			"value": "Ayyyyy pero como lo defiende jajajaja",
			"from": "daniel",
			"timestamp": "18:22"
		},
		"23_2_2": {
			"type": "text",
			"child": "23_2_3",
			"value": "Te redescubriste en vacaciones, no?",
			"from": "michael",
			"timestamp": "18:23"
		},
		"23_2_3": {
			"type": "text",
			"child": "24",
			"value": "Ni siquiera lo conocemos, tampoco hay que tratarlo mal",
			"from": "user",
			"timestamp": "18:24"
		},
		"26_5": {
			"type": "image",
			"child": "27",
			"value": "https://delete-me-after-globhack.s3-sa-east-1.amazonaws.com/trigonometria.jpg",
			"from": "daniel",
			"timestamp": "18:29"
		},
		"41_1": {
			"type": "text",
			"child": "41_1_1",
			"value": "&#128545;",
			"from": "michael",
			"timestamp": "19:50"
		},
		"41_1_1": {
			"type": "text",
			"child": "41_1_2",
			"value": "Jajajaja es verdad Michael, de pronto se enamoran",
			"from": "daniel",
			"timestamp": "19:50"
		},
		"41_1_2": {
			"type": "text",
			"child": "41_1_3",
			"value": "Ni de chiste digan eso, con esa gente toca de lejitos",
			"from": "michael",
			"timestamp": "19:51"
		},
		"41_1_3": {
			"type": "text",
			"child": "41_1_4",
			"value": "Sí claro, sigue fingiendo que no te gusta &#128527;",
			"from": "user",
			"timestamp": "19:52"
		},
		"41_1_4": {
			"type": "text",
			"child": "41_1_5",
			"value": "Mejor me voy a hacer tarea, nos vemos en 30 minutos para LoL",
			"from": "michael",
			"timestamp": "19:53"
		},
		"41_1_5": {
			"type": "text",
			"child": "41_1_6",
			"value": "Tarea? Jajaja sí claro, saludos a Nicolás",
			"from": "user",
			"timestamp": "19:55"
		},
		"41_1_6": {
			"type": "text",
			"child": "42",
			"value": "Jjaja mucha loquita",
			"from": "daniel",
			"timestamp": "19:56"
		},
		"41_2": {
			"type": "text",
			"child": "41_2_1",
			"value": "Parce, ahora me va a estar escribiendo ese marica &#128533;",
			"from": "michael",
			"timestamp": "19:50",
			"condition": [{
				"label": "mockedNicolas",
				"value": true
			}]
		},
		"41_2_1": {
			"type": "text",
			"child": "41_2_2",
			"value": "[user], dile a tu novio que se controle, no quiero que me esté escribiendo &#128533;",
			"from": "michael",
			"timestamp": "19:50",
			"condition": [{
				"label": "mockedNicolas",
				"value": false
			}]
		},
		"41_2_2": {
			"type": "text",
			"child": "41_2_3",
			"value": "Michael, la homosexualidad no es una enfermedad. Tú que eres fan de Queen, no te parece que Freddy Mercury era un tremendo artista? Y él era gay",
			"from": "user",
			"timestamp": "19:52"
		},
		"41_2_3": {
			"type": "text",
			"child": "41_2_4",
			"value": "Pues sí, pero me da igual, el pelirrojo no me genera confianza",
			"from": "michael",
			"timestamp": "19:53"
		},
		"41_2_4": {
			"type": "text",
			"child": "42",
			"value": "Por qué no lo conoces en lugar de andar con prejuicios?",
			"from": "daniel",
			"timestamp": "19:54"
		},
		"48_1": {
			"type": "text",
			"child": "48_1_1",
			"value": "Jajaja bien [user] &#128514;",
			"from": "michael",
			"timestamp": "15:26"
		},
		"48_1_1": {
			"type": "text",
			"child": "48_1_2",
			"value": "Listo, mañana paso por el café a ver si vuelvo a encontrar al mariquita",
			"from": "daniel",
			"timestamp": "15:27"
		},
		"48_1_2": {
			"type": "text",
			"child": "49",
			"value": "&#128514;&#128514;&#128514;",
			"from": "user",
			"timestamp": "15:27"
		},
		"48_2": {
			"type": "text",
			"child": "48_2_1",
			"value": "[user], deja de ser tan aburrido",
			"from": "daniel",
			"timestamp": "15:26"
		},
		"48_2_1": {
			"type": "text",
			"child": "48_2_2",
			"value": "Vamos a sacar a la mariposa del colegio... Cuando todos se den cuenta de la persona que es, se le va a acabar la vida social",
			"from": "michael",
			"timestamp": "15:27"
		},
		"48_2_2": {
			"type": "text",
			"child": "48_2_3",
			"value": "Cuál es tu problema Michael? Nicolás no se ha metido con nosotros, déjalo en paz",
			"from": "user",
			"timestamp": "15:27"
		},
		"48_2_3": {
			"type": "text",
			"child": "48_2_4",
			"value": "Jajaja está bien, me da igual, dejemos en paz al novio de [user]",
			"from": "michael",
			"timestamp": "15:28"
		},
		"48_2_4": {
			"type": "text",
			"child": "final3",
			"value": "&#128530;",
			"from": "michael",
			"timestamp": "15:28"
		},
		"48_3": {
			"type": "text",
			"child": "48_3_1",
			"value": "Ya le dio miedo al pobre [user] &#128530;",
			"from": "michael",
			"timestamp": "15:26"
		},
		"48_3_1": {
			"type": "text",
			"child": "48_3_2",
			"value": "Bueno, si no quieres participar da igual",
			"from": "daniel",
			"timestamp": "15:27"
		},
		"48_3_2": {
			"type": "text",
			"child": "48_3_3",
			"value": "Pedro? Participas o también te da miedo?",
			"from": "michael",
			"timestamp": "15:27"
		},
		"48_3_3": {
			"type": "text",
			"child": "48_3_4",
			"value": "Nah, yo sí participo jaja",
			"from": "pedro",
			"timestamp": "15:28"
		},
		"48_3_4": {
			"type": "text",
			"child": "49",
			"value": "Listo, así quedamos &#128170;",
			"from": "michael",
			"timestamp": "15:28"
		},
		"final1": {
			"type": "fadeOut",
			"child": "final1_1",
			"value": "Unos días después..."
		},
		"final1_1": {
			"type": "action",
			"child": "final1_2",
			"subtype": "newDate",
			"value": "FEB 27"
		},
		"final1_2": {
			"type": "fadeIn",
			"child": "final1_3"
		},
		"final1_3": {
			"type": "text",
			"child": "final1_4",
			"value": "Parce, vieron el periódico?",
			"from": "pedro",
			"timestamp": "17:14"
		},
		"final1_4": {
			"type": "text",
			"child": "final1_5",
			"value": "No jajaja, quién lee el periódico?",
			"from": "michael",
			"timestamp": "17:15"
		},
		"final1_5": {
			"type": "text",
			"child": "final1_6",
			"value": "...",
			"from": "pedro",
			"timestamp": "17:15"
		},
		"final1_6": {
			"type": "text",
			"child": "final1_7",
			"value": "Pedro, qué pasó?",
			"from": "daniel",
			"timestamp": "17:17"
		},
		"final1_7": {
			"type": "image",
			"child": "final1_8",
			"value": "https://delete-me-after-globhack.s3-sa-east-1.amazonaws.com/newsletter.png",
			"from": "pedro",
			"timestamp": "17:18"
		},
		"final1_8": {
			"type": "text",
			"child": "final1_9",
			"value": "&#128552;&#128552;&#128552;&#128552;",
			"from": "user",
			"timestamp": "17:18"
		},
		"final1_9": {
			"type": "text",
			"child": "final1_10",
			"value": "Lo encontraron colgado en su habitación.",
			"from": "pedro",
			"timestamp": "17:19"
		},
		"final1_10": {
			"type": "text",
			"child": "final1_11",
			"value": "No puede ser...",
			"from": "michael",
			"timestamp": "17:20"
		},
		"final1_11": {
			"type": "text",
			"child": "final1_12",
			"value": "Y dejó una nota.",
			"from": "pedro",
			"timestamp": "17:20"
		},
		"final1_12": {
			"type": "image",
			"child": "final1_13",
			"value": "https://delete-me-after-globhack.s3-sa-east-1.amazonaws.com/suicideletter.jpg",
			"from": "pedro",
			"timestamp": "17:21"
		},
		"final1_13": {
			"type": "image",
			"child": "final1_14",
			"value": "Creo que el bullying fue demasiado.",
			"from": "pedro",
			"timestamp": "17:21"
		},
		"final1_14": {
			"type": "end",
			"emoji": "⚰",
			"color": "7f0000",
			"message": "Nicolás no soportó el maltrato por parte tuya y de tus compañeros.",
			"goodEnd": false
		},
		"final2": {
			"type": "fadeOut",
			"child": "final2_1",
			"value": "Unos días después..."
		},
		"final2_1": {
			"type": "action",
			"child": "final2_2",
			"subtype": "newDate",
			"value": "FEB 27"
		},
		"final2_2": {
			"type": "fadeIn",
			"child": "final2_3"
		},
		"final2_3": {
			"type": "text",
			"child": "final2_4",
			"value": "Muchachos, hablé con Nicolás",
			"from": "user",
			"timestamp": "16:14"
		},
		"final2_4": {
			"type": "text",
			"child": "final2_5",
			"value": "Va a cambiarse de colegio",
			"from": "user",
			"timestamp": "16:15"
		},
		"final2_5": {
			"type": "text",
			"child": "final2_6",
			"value": "Tenías que ir a consolar a tu novio, no?",
			"from": "michael",
			"timestamp": "16:18"
		},
		"final2_6": {
			"type": "text",
			"child": "final2_7",
			"value": "Michael ya...",
			"from": "user",
			"timestamp": "16:19"
		},
		"final2_7": {
			"type": "text",
			"child": "final2_8",
			"value": "Jajaja bueno, lo importante es que ya se fue",
			"from": "michael",
			"timestamp": "16:24"
		},
		"final2_8": {
			"type": "text",
			"child": "final2_9",
			"value": "Me dio algo de lástima, estaba muy afectado",
			"from": "user",
			"timestamp": "16:25"
		},
		"final2_9": {
			"type": "text",
			"child": "final2_10",
			"value": "Quién sabe qué habría pasado si hubieran seguido molestándolo",
			"from": "user",
			"timestamp": "16:25"
		},
		"final2_10": {
			"type": "text",
			"child": "final2_11",
			"value": "Da igual, se fue el pelirrojo &#129395;&#129395;",
			"from": "michael",
			"timestamp": "16:27"
		},
		"final2_11": {
			"type": "end",
			"emoji": "🙁",
			"color": "ff8a80",
			"message": "Tus amigos arruinaron la experiencia de Nicolás en tu colegio.",
			"goodEnd": false
		},
		"final3": {
			"type": "fadeOut",
			"child": "final3_1",
			"value": "Unos días después..."
		},
		"final3_1": {
			"type": "action",
			"child": "final3_2",
			"subtype": "newDate",
			"value": "FEB 27"
		},
		"final3_2": {
			"type": "fadeIn",
			"child": "final3_3"
		},
		"final3_3": {
			"type": "text",
			"child": "final3_4",
			"value": "Oigan, hoy escuche a Nicolás hablar de LoL, parece que es diamante &#128561;",
			"from": "pedro",
			"timestamp": "19:17"
		},
		"final3_4": {
			"type": "text",
			"child": "final3_5",
			"value": "En serio? &#128561;&#128561;",
			"from": "daniel",
			"timestamp": "19:17"
		},
		"final3_5": {
			"type": "text",
			"child": "final3_6",
			"value": "Sí parce, y como a nosotros siempre nos falta 1...",
			"from": "pedro",
			"timestamp": "19:19"
		},
		"final3_6": {
			"type": "text",
			"child": "final3_7",
			"value": "No me digas que invitaste al pelirrojo a jugar con nosotros &#128528;",
			"from": "michael",
			"timestamp": "19:20"
		},
		"final3_7": {
			"type": "text",
			"child": "final3_8",
			"value": "Relájate Michael... no perdemos nada con jugar con él",
			"from": "user",
			"timestamp": "19:20"
		},
		"final3_8": {
			"type": "text",
			"child": "final3_9",
			"value": "Vamos, nos está esperando para jugar unas partidas",
			"from": "pedro",
			"timestamp": "19:19"
		},
		"final3_9": {
			"type": "fadeOut",
			"child": "final3_10",
			"value": "Un rato más tarde..."
		},
		"final3_10": {
			"type": "fadeIn",
			"child": "final3_11"
		},
		"final3_11": {
			"type": "text",
			"child": "final3_12",
			"value": "Nicolás juega muy bien!!!",
			"from": "daniel",
			"timestamp": "21:41"
		},
		"final3_12": {
			"type": "text",
			"child": "final3_13",
			"value": "No esperaba que fuera tan bueno jajaja",
			"from": "pedro",
			"timestamp": "21:42"
		},
		"final3_13": {
			"type": "text",
			"child": "final3_14",
			"value": "Yo tampoco &#128517;, tú qué piensas Michael?",
			"from": "user",
			"timestamp": "21:42"
		},
		"final3_14": {
			"type": "text",
			"child": "final3_15",
			"value": "No puedo creerlo",
			"from": "michael",
			"timestamp": "21:44"
		},
		"final3_15": {
			"type": "text",
			"child": "final3_16",
			"value": "Ese tipo es muy bueno",
			"from": "michael",
			"timestamp": "21:44"
		},
		"final3_16": {
			"type": "text",
			"child": "final3_17",
			"value": "Deberíamos invitarlo al grupo, no creen?",
			"from": "user",
			"timestamp": "21:45"
		},
		"final3_17": {
			"type": "text",
			"child": "final3_18",
			"value": "Por mí está bien. Michael?",
			"from": "daniel",
			"timestamp": "21:46"
		},
		"final3_18": {
			"type": "text",
			"child": "final3_19",
			"value": "Eh... sí, por qué no? Parece buena gente",
			"from": "michael",
			"timestamp": "21:47"
		},
		"final3_19": {
			"type": "text",
			"child": "final3_20",
			"value": "Jajaja eso!",
			"from": "user",
			"timestamp": "21:47"
		},
		"final3_20": {
			"type": "action",
			"child": "final3_21",
			"subtype": "add",
			"from": "pedro",
			"to": "nicolas"
		},
		"final3_21": {
			"type": "text",
			"child": "final3_22",
			"value": "Hola muchachos, cómo van?",
			"from": "nicolas",
			"timestamp": "21:50"
		},
		"final3_22": {
			"type": "text",
			"child": "final3_23",
			"value": "Bienvenido al parche Nicolás",
			"from": "michael",
			"timestamp": "21:51"
		},
		"final3_23": {
			"type": "text",
			"child": "final3_24",
			"value": "Gracias! jugamos otra vez mañana?",
			"from": "nicolas",
			"timestamp": "21:52"
		},
		"final3_24": {
			"type": "text",
			"child": "final3_25",
			"value": "Sí, claro &#128515;",
			"from": "user",
			"timestamp": "21:51"
		},
		"final3_25": {
			"type": "end",
			"emoji": "🥳",
			"color": "003d00",
			"message": "Nicolás ahora es parte de tu grupo de amigos!",
			"goodEnd": true
		}
	}
}

export default storyJson;
