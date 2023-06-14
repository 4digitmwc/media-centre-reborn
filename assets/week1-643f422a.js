const e={postName:"wandering",title:"Chapter 1: Wandering",subtitle:"A new beginning rises over the horizon as the endless space expedition finally leads to discovery.",authors:["howtoplayln"]},t=`<h2>Disclaimer</h2>
<p>This is a work of fiction. Any resemblance to actual people, living or dead, or actual events, is purely coincidental.</p>
<p>Readers discretion is advised.</p>
<hr>
<h2>Wandering</h2>
<p>Two thousand years, to be precise, that we have been <em>wandering through the stars</em>, through the unidentifiable star clusters, and solar systems. The chance of finding the habitable planet is still the same, regardless of time. The memoryless property of this time exponentiates the desperation of the crewmates, as they had been working hard on using the power of immortality. The remaining fuel of this spaceship was getting lower and lower, and there was no resource left for another year. Until there was an alert from the spaceship's internal systems.</p>
<p><em>beep</em></p>
<p>This sequence of sine waves brought the attention from everyone in the spacecraft, as this signal had gona unheard for countless years, and explicitly, the 15047 light years we had travelled. All spacecrew walked through the maze of this megastructure and gathered at the control room...</p>
<p>On my laptop, I opened a terminal and ran a command:</p>
<blockquote>
<p>index@zion&gt; cat alert.json</p>
</blockquote>
<pre><code class="language-json">{
    &quot;status&quot;: 200,
    &quot;content&quot;: &quot;Planet found in a scope of 10 light years&quot;,
    &quot;algorithm_type&quot;: &quot;bfs&quot;,
    &quot;planet_data&quot;: {
        &quot;name&quot;: &quot;ethos-1547b&quot;,
        &quot;system&quot;: &quot;ethos&quot;,
        &quot;sol&quot;: {
            &quot;name&quot;: &quot;ethos&quot;,
            &quot;type&quot;: &quot;white-dwarf&quot;
        },
        &quot;sol_distance_au&quot;: 0.73,
        &quot;temperature_k&quot;: 283.34,
        &quot;atmosphere&quot;: {
            &quot;nitrogen&quot;: 0.75,
            &quot;oxygen&quot;: 0.25,
        },
        &quot;surface&quot;: {
            &quot;land&quot;: 0.23,
            &quot;water&quot;: 0.77
        },
        &quot;gravity&quot;: 9.72,
        &quot;rotation_axis&quot;: 22.43,
        &quot;tidally_locked&quot;: false,
        &quot;habitability&quot;: 0.98,
        &quot;distance_from_spaceship_ly&quot;: 1.547,
        &quot;eta_days&quot;: 40.2
    }
}
</code></pre>
<p>Out of excitement, the coordinators agreed to accelerate the spacecraft.</p>
<blockquote>
<p>index@zion&gt; python move-spaceship.py --accel</p>
</blockquote>
<pre><code>Planet Name: ethos-1547b
Changing the target to ethos-1547b...
Expected time of arrival: 40.2 days
Expected time of arrival (after acceleration): 3 days
</code></pre>
<p>It took two days for us to see the planet closely, as we approached the <em>ethos</em> system. The picture ahead that met us was a giant, crystal blue sphere, mixed with emerald green shading and an atmosphere as warm and familiar as to that of our past home.</p>
<p><img src="https://cdn.discordapp.com/attachments/512920101423415306/1057987315479351406/image.png" alt=""></p>
<p>The fuel was almost depleted. Robots were sent to observe and construct buildings on the planet. It was the hit or miss for humanity.</p>
<p>Even though the star beside it was a white dwarf, fortunately, the planet was close enough for us to live off it as a source of energy, but not too close that it was tidally locked to the star. It was (for some reason) the perfect condition for us mortals.</p>
<p>In a brief moment, the robots' task of building structures for humans to live in was completed. It was the time to land our spaceship, and breathe the fresh air of this exoplanet for the very first time.</p>
<p>This was our new little home, The planet <em>ethos-1547b</em>. We decided to call it <em>Zion</em> to commemorate the spaceship which brought us to this destination.</p>
<p>This newfound habitat paved the way for the New Era of humanity.</p>
<p><em>ethos-1547b landing completed.</em></p>
`;export{e as attributes,t as html};
