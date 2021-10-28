interface Employee {
	name: string;
	title: string;
}

interface Manager extends Employee {
	department: string;
	numOfEmployees: number;
	scheduleMeeting: (topic: string) => void;
}
// defines shape of an object

let developer = {
	name: "Michelle",
	title: "Senior TypeScript Developer",
	editor: "Visual Studio Code",
};

let NewEmployee: Employee = developer;
// structural type system, ducktyping

class Developer {
	department: string;
	private _title: string;
	// #salary: number; //private
	get title(): string {
		return this._title;
	}
	set title(newTitle: string) {
		this._title = newTitle.toUpperCase();
	}
	documentRequirements(requirements: string): void {
		console.log(requirements);
	}
}

class WebDeveloper extends Developer {
	favoriteEditor: string;
	writeTypeScript(): void {
		//
	}
}

let webdev: WebDeveloper = new WebDeveloper();
webdev.department = "Software Engineer";
webdev.favoriteEditor = "Visual Studio Code";

interface EmployeeTwo {
	name: string;
	title: string;
	logID: () => string;
}

class Engineer implements EmployeeTwo {
	name: string;
	title: string;
	logID() {
		return `${this.name}_${this.title}`;
	}
}

// Static Members
// No need for this.
class WebDeveloperTwo extends Developer {
	static jobDescription: string = "Build Cool Things!";
	static logFavouriteProtocol() {
		console.log("HTTPS, of course!");
	}
	logJobDescription(): void {
		console.log(WebDeveloperTwo.jobDescription);
	}
}

WebDeveloperTwo.logFavouriteProtocol();

// Constructors
class Developer3 {
	constructor() {
		// not obligatory
		console.log("Creating a new developer");
	}
}

class WebDeveloper3 extends Developer3 {
	readonly favouriteEditor: string; // prevents value beeing changed once it is set
	constructor(editor: string) {
		// when new instance of a class is created, a string must be passed
		super(); // needed to call parent (super-class) constructor from a child class
		this.favouriteEditor = editor;
	}
}

//
