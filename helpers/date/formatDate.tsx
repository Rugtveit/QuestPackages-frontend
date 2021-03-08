let formatString = ((date: string):string  => 
{
    if(date === 'Unknown') return 'No date found';
    const dateFormat: Date = new Date(date);
    return dateFormat.toLocaleDateString();
})

export default formatString; 