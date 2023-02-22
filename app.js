const tasks = ['exes 1'];

function Add (name) {
    tasks.push(name);
}

function Remove (name) {
    const index = tasks.indexOf(name);

    if (index === -1) {
        return;
    }

    tasks.splice(index, 1);
}

function Prioritize (name) {
    const index = tasks.indexOf(name);
    
    if (index === -1) {
        return;
    }

    const oldTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(oldTask);
}

Add('new 1');
Add('new 2');
console.log(tasks);
Remove('new 2');
console.log(tasks);
Prioritize('new 1');
console.log(tasks);