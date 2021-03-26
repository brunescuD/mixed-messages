
/**This component is designed to store all the messages
 * will create it as an object
 * will have 3 arrays as domains
 * every domain will hold specific messages as strings
 * will have method run that will generate a message and will be connected to "run" button
 * 
 */

export const messages = {
    inspiration :['“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', 
        '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 
        '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers', 
        '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown', 
        '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi', 
        '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs', 
        '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen', 
        '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino', 
        '“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai', 
        '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou', 
        '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe', 
        '“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?” – Brian Tracy', 
        '“We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link'],

    jokes : ['I invented a new word! Plagiarism!', 
        'Did you hear about the mathematician who’s afraid of negative numbers?',
        'Why do we tell actors to “break a leg? Because every play has a cast.',
        'Helvetica and Times New Roman walk into a bar.“Get out of here!” shouts the bartender. “We don’t serve your type.”',
        'Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”',
        'Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house.',
        'Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.',
        'A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!” “Don’t worry,” said the doc. “Those are just contractions.”',
        'A bear walks into a bar and says, “Give me a whiskey and … cola.” “Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.” ',
        'Did you hear about the actor who fell through the floorboards? He was just going through a stage.',
        'Did you hear about the claustrophobic astronaut?He just needed a little space.'
    ],
    astrology : ["I don't believe in astrology; I'm a Sagittarius and we're skeptical. Arthur C. Clarke",
        "If astrology is real, I guess I'm a pretty quintessential Virgo. Ian Harding",
        "I'm a typical Capricorn. I'm hardworking, loyal, sometimes stubborn, and I don't believe in astrology. Jonah Peretti", 
    ],

    run(domain){
        let message ='';
        if(domain === 'random'){
            domain = this.jokes.concat(this.inspiration, this.astrology);
            const indexNum = Math.floor(Math.random()*domain.length+1);
            message = domain[indexNum];
        } else {
            const indexNum = Math.floor(Math.random()*this[domain].length+1);
            message = this[domain][indexNum];
        }
        return message;
    }
}


//console.log(messages.run('inspiration'))