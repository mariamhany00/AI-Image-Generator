const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelectorAll('.Images');

const getImage = async () => {
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };

    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    
    // parse response
    const data = await res.json();
    const listImages = data.data;

    listImages.forEach(photo => {
        const container = document.createElement("div");

        // Iterate through each .Images element and append the container
        images.forEach(image => image.appendChild(container));

        const img = document.createElement("img");
        container.appendChild(img);
        img.src = photo.url;
    });
};