import { User } from "../interfaces/user.interface";
import { sleep } from "../util/utils";

export class UserAPI {
    private static usersList: User[] = [
        { id: 1,name: 'Josh Pearce', age: 23, quote: 'He who speaks without an attentive ear is mute.', avatar: 'avatar1.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nulla dui, ut euismod ligula finibus a. Sed ac urna non augue lobortis facilisis. Pellentesque erat elit, pellentesque sed mauris id, fringilla accumsan leo. In nunc ligula, elementum eu convallis ut, rhoncus tempus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat finibus suscipit. In consectetur, enim a bibendum congue, lorem eros hendrerit nibh, non consequat leo dolor non eros. Ut vulputate tristique quam, et maximus odio hendrerit maximus. Nam tempus, mi sit amet tincidunt sagittis, tellus nunc ornare neque, quis ultricies libero ligula quis risus. Nullam ut venenatis leo. Maecenas egestas quam ac dapibus bibendum. Cras tempus consectetur nunc, vel commodo mauris molestie sit amet. ' },
        { id: 2,name: 'Shahid Lim', age: 35, quote: 'Leaders are limited by their vision rather than by their abilities.', avatar: 'avatar2.png', description: 'Ut euismod arcu in arcu consequat, eu lacinia mauris scelerisque. Nunc quis mauris sollicitudin, commodo nunc porttitor, pellentesque dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas pretium, dui a facilisis sagittis, nisi leo cursus justo, eget consequat tellus sem scelerisque ex. Pellentesque rhoncus ac odio sed euismod. Ut id dapibus lacus, eu molestie magna. Nunc rhoncus, neque eget sollicitudin ornare, turpis massa rutrum arcu, in dapibus ex justo ut leo. Aenean luctus erat non sagittis pellentesque. ' },
        { id: 3,name: 'Sonny Coffey', age: 21, quote: 'A smart person knows how to talk. A wise person knows when to be silent.', avatar: 'avatar3.png', description: 'Maecenas hendrerit venenatis arcu. Donec molestie, risus egestas elementum fringilla, nisl massa ornare leo, eget auctor augue tellus nec turpis. Nunc tristique velit et dui luctus tincidunt. Maecenas malesuada ex vel odio consectetur, sed blandit nisi sollicitudin. Aenean non aliquam lectus. Vivamus fringilla auctor massa, at iaculis est fermentum tempor. In tincidunt vitae libero id bibendum. Aliquam mollis dolor pretium faucibus lobortis. Morbi et dolor hendrerit, laoreet ante id, egestas metus. Etiam ultrices quam a tortor mollis, sed faucibus risus accumsan. Nulla mi nisi, tincidunt ac nisl facilisis, ultricies mollis libero. ' },
        { id: 4,name: 'Vincent Spears', age: 31, quote: 'There is no limit to the amount of good you can do if you don\'t care who gets the credit.', avatar: 'avatar4.png', description: 'Curabitur pretium leo ligula, eget consequat purus tempor vel. Suspendisse non erat id justo ullamcorper consequat id tincidunt nunc. Nulla feugiat ex at feugiat condimentum. Aliquam elementum efficitur turpis eu lacinia. Etiam finibus sapien id velit lacinia porta. Proin congue iaculis dolor, non fermentum turpis eleifend sed. Duis vitae quam sit amet neque dapibus lacinia vel non massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tortor lorem, tincidunt vitae odio eu, pulvinar euismod orci. Nunc vel scelerisque justo. Morbi eu risus vel odio venenatis bibendum et ac est. Praesent vulputate nibh vel rhoncus pharetra. ' },
        { id: 5,name: 'Dina Leonard', age: 28, quote: 'Don\'t turn over the rocks if you don\'t want to see the pale creatures who live under them.', description: 'Maecenas consequat eu ligula eu commodo. Phasellus et felis sem. Nulla vel justo id dui bibendum hendrerit. Praesent finibus nisi neque, sit amet vehicula quam aliquam vitae. Pellentesque tempor turpis mauris, in ornare lorem elementum non. Nullam tellus urna, condimentum vitae erat id, molestie rutrum erat. Pellentesque auctor, augue id molestie pulvinar, dui neque laoreet elit, in interdum leo velit ac massa. Morbi fermentum eget turpis eget commodo. Phasellus consequat dignissim mauris non sagittis. Nulla faucibus ut lacus in elementum. Duis rhoncus sapien at iaculis tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla hendrerit quam porta, venenatis est a, aliquam ligula. ' }
    ];

    static async getUsers(): Promise<User[]> {
        await sleep(300);

        return this.usersList;
    }

    static async getUserById(userId: number): Promise<User | null> {
        await sleep(300);

        return this.usersList.find((user) => user.id === userId) ?? null;
    }
}
