import feather from 'feather-icons';

function Icon({name, size = 16, strokeWidth = 1, color = "black"}) {
    return feather.icons[name].toSvg({color, width:size, height:size, "stroke-width":strokeWidth});
}

export default Icon;