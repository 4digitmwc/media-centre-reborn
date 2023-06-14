---
postName: "wandering"
title: "Chapter 1: Wandering"
subtitle: "A new beginning rises over the horizon as the endless space expedition finally leads to discovery."
authors:
  - "howtoplayln"
---

## Disclaimer

This is a work of fiction. Any resemblance to actual people, living or dead, or actual events, is purely coincidental.

Readers discretion is advised.

---

## Wandering

Two thousand years, to be precise, that we have been *wandering through the stars*, through the unidentifiable star clusters, and solar systems. The chance of finding the habitable planet is still the same, regardless of time. The memoryless property of this time exponentiates the desperation of the crewmates, as they had been working hard on using the power of immortality. The remaining fuel of this spaceship was getting lower and lower, and there was no resource left for another year. Until there was an alert from the spaceship's internal systems.

*beep*

This sequence of sine waves brought the attention from everyone in the spacecraft, as this signal had gona unheard for countless years, and explicitly, the 15047 light years we had travelled. All spacecrew walked through the maze of this megastructure and gathered at the control room...

On my laptop, I opened a terminal and ran a command:

> index@zion\> cat alert.json

```json
{
    "status": 200,
    "content": "Planet found in a scope of 10 light years",
    "algorithm_type": "bfs",
    "planet_data": {
        "name": "ethos-1547b",
        "system": "ethos",
        "sol": {
            "name": "ethos",
            "type": "white-dwarf"
        },
        "sol_distance_au": 0.73,
        "temperature_k": 283.34,
        "atmosphere": {
            "nitrogen": 0.75,
            "oxygen": 0.25,
        },
        "surface": {
            "land": 0.23,
            "water": 0.77
        },
        "gravity": 9.72,
        "rotation_axis": 22.43,
        "tidally_locked": false,
        "habitability": 0.98,
        "distance_from_spaceship_ly": 1.547,
        "eta_days": 40.2
    }
}
```

Out of excitement, the coordinators agreed to accelerate the spacecraft.

> index@zion\> python move-spaceship.py --accel

```
Planet Name: ethos-1547b
Changing the target to ethos-1547b...
Expected time of arrival: 40.2 days
Expected time of arrival (after acceleration): 3 days
```

It took two days for us to see the planet closely, as we approached the *ethos* system. The picture ahead that met us was a giant, crystal blue sphere, mixed with emerald green shading and an atmosphere as warm and familiar as to that of our past home.

![](https://cdn.discordapp.com/attachments/512920101423415306/1057987315479351406/image.png)

The fuel was almost depleted. Robots were sent to observe and construct buildings on the planet. It was the hit or miss for humanity.

Even though the star beside it was a white dwarf, fortunately, the planet was close enough for us to live off it as a source of energy, but not too close that it was tidally locked to the star. It was (for some reason) the perfect condition for us mortals.

In a brief moment, the robots' task of building structures for humans to live in was completed. It was the time to land our spaceship, and breathe the fresh air of this exoplanet for the very first time.

This was our new little home, The planet *ethos-1547b*. We decided to call it *Zion* to commemorate the spaceship which brought us to this destination. 

This newfound habitat paved the way for the New Era of humanity.

*ethos-1547b landing completed.*
