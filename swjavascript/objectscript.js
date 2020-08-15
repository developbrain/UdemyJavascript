//Object Creation Methods
//1. Single Object
// var sam = {
//     name : 'sam',
//     birthYear : 1990,
//     job : 'teacher',
//     calculateAge : function(){
//         console.log(2020-this.birthYear);
//     }
// };
// console.log(sam);
// sam.calculateAge();

function diamond(n)
{
	if (n <= 0 || n % 2 === 0)
		return null;
	else
	{
		let diamond = '';
		let diamondCounter = 1;
		let reverseFlag = false;
		for (let i = 1; i <= n; i++)
		{
			let spaceCounter = 0;
			spaceCounter = (n - diamondCounter) / 2;

			for (let j = 1; j <= spaceCounter; j++) 
			{
				diamond += ' ';
			}
			for (let k = 1; k <= diamondCounter; k++) 
			{
				diamond += '*';
			}

			if(diamondCounter === n)
				reverseFlag = true;

			if(reverseFlag)
				diamondCounter -= 2;
			else
				diamondCounter += 2;

			diamond += '\n';
			
			/*
			let spaceCounter = Math.floor((n - i) / 2);
			console.log(i + '#########' +spaceCounter);
			for (let j = 1; j <= spaceCounter; j++) 
			{
				diamond += ' ';
			}

			for (let k = 1; k <= i; k++) 
			{
				diamond += '*';
			}
			diamond += '\n';
			*/
		}
		return diamond;
	}
}

//console.log(diamond(1));
//console.log(diamond(3));
console.log(diamond(5));
//console.log(diamond(7));
//console.log(diamond(2));
//console.log(diamond(-3));
//console.log(diamond(0));