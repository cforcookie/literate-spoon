const tasks = ['exes 1'];

function Add (name) {
    tasks.push(name);
}

function Remove (name) {
    const index = tasks.indexOf(name);

    if (index === -1) {
        return;
    }

     return tasks.splice(index, 1);
}

function Prioritize (name) {
    const result = Remove(name);
    if (!result) {
        return;
    }
    tasks.unshift(result[0]);
}

Add('new 1');
Add('new 2');
console.log(tasks);
Remove('new 2');
console.log(tasks);
Prioritize('new 1');
console.log(tasks);