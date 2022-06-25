import './App.css';
import SimpsonHero from "./components/SimpsonHero/SimpsonHero";
import RickAndMortyCharacters from "./components/RickAndMortyCharacters/RickAndMortyCharacters";

function App() {
    return (
        <div>
            <SimpsonHero name='Homer Simpson'
                         occupation={'Chemist and safety inspector Nuclear power plant operator'}
                         photo={'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/200px-Homer_Simpson_2006.png'}
                         firstAppearance={'Good Night (1987)'}
                         description={'Homer Jay Simpson is one of the main characters of the American animated sitcom The Simpsons' +
                             'He is voiced by Dan Castellaneta and first appeared, along with the rest of his family, in The Tracey' +
                             'Ullman Show short "Good Night" on April 19, 1987. Homer was created and designed by cartoonist Matt Groening' +
                             'while he was waiting in the lobby of producer James L. Brooks office. Groening had been called to pitch a ' +
                             'series of shorts based on his comic strip Life in Hell but instead decided to create a new set of characters. ' +
                             'He named the character after his father, Homer Groening. After appearing for three seasons on The ' +
                             'Tracey Ullman Show, the Simpson family got their own series on Fox, which debuted December 17, 1989. The show was later acquired by Disney in 2019'}
            />

            <SimpsonHero name={'Marge Simpson'}
                         occupation={'Housewife'}
                         photo={'https://upload.wikimedia.org/wikipedia/lv/0/0b/Marge_Simpson.png'}
                         firstAppearance={'Good Night (1987)'}
                         description={'Marjorie Jacqueline "Marge" Simpson[1] (née Bouvier) is a character, based on ' +
                             'the real Marge (Matt Groening\'s mom), in the American animated sitcom The Simpsons and ' +
                             'part of the eponymous family. Voiced by Julie Kavner, she first appeared on television in ' +
                             'The Tracey Ullman Show short "Good Night" on April 19, 1987. Marge was created and designed' +
                             ' by cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks\' ' +
                             'office. Groening had been called to pitch a series of shorts based on Life in Hell but ' +
                             'instead decided to create a new set of characters. He named the character after his mother' +
                             ' Margaret Groening. '}
            />

            <SimpsonHero name={'Bart Simpson'}
                         occupation={'4th grade student at Springfield Elementary School'}
                         photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
                         firstAppearance={'Good Night (1987)'}
                         description={'Bart Simpson is a fictional character in the American animated television series' +
                             ' The Simpsons and part of the Simpson family. He is voiced by Nancy Cartwright and first ' +
                             'appeared on television in The Tracey Ullman Show short "Good Night" on April 19, 1987. ' +
                             'Cartoonist Matt Groening created and designed Bart while waiting in the lobby of James L. ' +
                             'Brooks\' office. Groening had been called to pitch a series of shorts based on his comic ' +
                             'strip, Life in Hell, but instead decided to create a new set of characters'}
            />

            <SimpsonHero name={'Lisa Simpson'}
                         occupation={'2nd grade student at Springfield Elementary School'}
                         photo={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}
                         firstAppearance={'Good Night (1987)'}
                         description={'Lisa Marie Simpson[1] is a fictional character in the animated television series' +
                             ' The Simpsons. She is the middle child and most accomplished of the Simpson family. Voiced ' +
                             'by Yeardley Smith, Lisa was born as a character in The Tracey Ullman Show short "Good Night" ' +
                             'on April 19, 1987. Cartoonist Matt Groening created and designed her while waiting to ' +
                             'meet James L. Brooks. '}
            />

            <SimpsonHero name={'Maggie Simpson'}
                         occupation={'-'}
                         photo={'https://upload.wikimedia.org/wikipedia/lv/9/9d/Maggie_Simpson.png'}
                         firstAppearance={'Good Night (1987)'}
                         description={'Margaret Evelyn Lenny "Maggie" Simpson[1][2] is a fictional character in the ' +
                             'animated television series The Simpsons and a part of the Simpson family, notably the ' +
                             'youngest member. She first appeared on television in the Tracey Ullman Show short "Good Night" ' +
                             'on April 19, 1987. Maggie was created and designed by cartoonist Matt Groening while he was' +
                             ' waiting in the lobby of James L. Brooks\' office. She received her first name from ' +
                             'Groening\'s youngest sister. After appearing on The Tracey Ullman Show for three years, ' +
                             'the Simpson family was given their own series on the Fox Broadcasting Company which debuted ' +
                             'December 17, 1989.'}
            />

            <div>
                <h1>RICK AND MORTY CHARACTERS</h1>
                <div className={'second_characters_block'}>
                    <div className={'character'}>
                        <RickAndMortyCharacters id={'1'}
                                                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                                                name={'Rick Sanchez'}
                                                status={'Alive'}
                                                species={'Human'}
                                                gender={'Male'}
                        />
                    </div>

                    <div className={'character'}>
                        <RickAndMortyCharacters id={'5'}
                                                name={'Jerry Smith'}
                                                status={'Alive'}
                                                species={'Human'}
                                                image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
                                                gender={'Male'}
                        />
                    </div>

                    <div className={'character'}>
                        <RickAndMortyCharacters id={'6'}
                                                name={'Abadango Cluster Princess'}
                                                status={'Alive'}
                                                species={'Alien'}
                                                image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
                                                gender={'Female'}
                        />
                    </div>

                    <div className={'character'}>
                        <RickAndMortyCharacters id={'8'}
                                                name={'Adjudicator Rick'}
                                                status={'Dead'}
                                                species={'Human'}
                                                image={'https://rickandmortyapi.com/api/character/avatar/8.jpeg'}
                                                gender={'Male'}
                        />
                    </div>

                    <div className={'character'}>
                        <RickAndMortyCharacters id={'10'}
                                                name={'Alan Rails'}
                                                status={'Dead'}
                                                species={'Human'}
                                                image={'https://rickandmortyapi.com/api/character/avatar/10.jpeg'}
                                                gender={'Male'}
                        />

                    </div>

                    <div className={'character'}>
                        <RickAndMortyCharacters id={'14'}
                                                name={'Alien Morty'}
                                                status={'unknown'}
                                                species={'Alien'}
                                                image={'https://rickandmortyapi.com/api/character/avatar/14.jpeg'}
                                                gender={'Male'}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;


// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів