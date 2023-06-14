const e={postName:"behind-the-scene-3",title:"Media Centre Behind the Scene: The Essence of Storyboarding",subtitle:"The storyboard is undeniably one of the essence in the astounding experiences in Tiebreaker Showcase, what are the techniques we used behind these effects?",authors:["polytetral","howtoplayln"],table_of_contents:!0},t=`<h2>Introduction &amp; Initial Ideas</h2>
<p>The storyboard is undeniably one of the features that enhances the watching experiences of this astounding tiebreaker showcase. To create these effects, there was a lot of efforts and calculations were put in this storyboard. In this article, Polytetral and HowToPlayLN will talk about the process, algorithms and breakdown the mathematical backgrounds behind them.</p>
<h2>Frameworks</h2>
<p>For this storyboard, Polytetral used <strong>Storybrew with C#</strong> to build the effects and flashes. Meanwhile I used my own storyboard library written in <strong>Python</strong> which I will call it <strong>pystoryboard</strong>.</p>
<h3>Storybrew</h3>
<p>If you've ever wanted to get your hands on storyboarding in osu!, you have probably come to realize that an intricate storyboard probably requires more than just your normal editor in osu, especially if you're applying lots of layers and effects and want to be able to visualize changes made instantaneously.</p>
<p>For this reason, <strong>storybrew</strong> is a relatively popular go-to choice for a storyboard editor. It boasts a Graphical User Interface (GUI) that allows the storyboarder to view effects added immediately after changes are made, and has some effects already built in and at your disposal. Such effects include adding backgrounds, altering colors of images, particle effects and even an audio visualizer.</p>
<p>Though, a big portion of my contribution to the storyboard did not require me to utilise these effects, simply because most of them have been taken care of by the materials designed. In essence (no pun intended), all I really had to do in storybrew was to utilise its GUI to view and suggest changes to the storyboard, and implement a few flashing effects, which can simply be put as increasing the opacity of a static color image and decreasing it very quickly.</p>
<p>One important thing to note (especially for storyboarders who are looking to use storybrew), is that in spite of its power, is that if you ever need to implement any custom effects (just as I needed to for the flashes), <strong>you will need to create your scripts in C#</strong>. To some that may or may not be a nightmare, and for me, it was shockingly my first encounter with coding in C#. Regardless, it was a very educative first hand at it.</p>
<p>Though, if you're looking to try your hand at storyboarding and want to use a slightly more accessible programming language, <strong>pystoryboard</strong> might be what you're looking for. This is further elaborated in the section that supercedes this!</p>
<h3>pystoryboard</h3>
<p><strong>Current pystoryboard development is in progress because the developer will add some additional tools created for this storyboard in.</strong></p>
<p><strong>pystoryboard</strong> is the future python package for osu!storyboard creation, it has some basic tools like <strong>Sprite</strong> and <strong>Event</strong>, including some tools to create the images for sprite creation. With how easy it is with python to create the complex mathematical calculations with the help of <a href="https://numpy.org/">numpy</a> and many packages created by the community, it is really flexible to create these astounding effects.</p>
<p>It is currently in the development and aims for new developers to get used to the programming languages and how to create the algorithms using the storyboard as a learning framework, including making storyboard creation more accessible to everyone.</p>
<p>For those who are interested in contribution or testing, please <strong>Direct Message me in Discord</strong> (IndexError#1033). As a developer, I gladly accept any help with this module.</p>
<p>For the source code of this particular storyboard, you can look it up <a href="https://github.com/indekkusu-era/essence-storyboard/tree/main/essence">here</a>. If you have a python and some linear algebra knowledge, feel free to check it out alongside with this article.</p>
<h2>Quotes, Chapters and Mapper Names</h2>
<p>Before I even started thinking about the lore that would encapsulate this tiebreaker and eventually this storyboard, I first had to get my hands on the song and listen to it. Roughly around December last year, I had my first listen of the full song, and needless to say, I was overwhelmed with emotion and ideas.</p>
<p>The first thing I found was that to my soul, Essence was not simply a tiebreaker song, but was also telling an unwritten story, with many different chapters converging into a singular narrative. From there, I decided that linking the lore behind Cryochemistry (4DM4 Custom Grand Finals Tiebreaker) to this was a fitting narrative for the occasion. With the idea in mind, I started to draft and discuss ideas with HowToPlayLN regarding the details of each chapter, and eventually it boiled down to the 6 chapters you see.</p>
<ul>
<li><strong>Beginnings</strong> was called as such because of where the characters originated, which roughly summarizes how Earth was frozen up at the end of 4DM4 lore.</li>
<li><strong>Uncertainty</strong> digs more into the unrest of the masses due to the C.O.V.I.D. outbreak, and the presence of another supernatural (redacted) event that left Index (the MC) struggling against himself to remember his identity and memories.</li>
<li><strong>Progress</strong> signals a new start for mankind on Zion, where people started to fight adversities together, as Index strives to find a resolution to the outbreak.</li>
<li><strong>Ascendance</strong> (not the catch mapper) is a more imaginative part of the resolution, where Index finds himself rising up with the stars to eventually meet Polychroma.</li>
<li><strong>Essence</strong> is basically what it explains itself to be after all the lore videos -- a magical substance made of stardust that humans affected by C.O.V.I.D. and the supernatural event both lose, and need to be returned for colors to be recovered.</li>
<li><strong>Forever</strong> is a bittersweet sendoff to our MC Index, as he approaches the end of his life at the end of the event, and sleeps forever, in hoping that Zion will also live in peace forever.</li>
</ul>
<p>The quotes themselves are also built around this story. To be frank, most of them are simply so just because they sounded poetic. Mapper Names were also included as an important tribute to those who helped out with this big project.</p>
<p>All Chapter and Mapper Names were implemented into a &quot;User Interface&quot; that emulated that of a story with chapters, and the font choice was also intentionally a Serif font, to ensure the &quot;class&quot; of the User Interface. Furthermore, the quotes were packed into transitions between chapters, as how the User Interface actually disappears during those sections is a signal of it.</p>
<p>Overall, you can treat the chapters and quotes as the full narrative of the 4DM2023 lore, and perhaps your experience of this tiebreaker will be enhanced by a deeper understanding of the story implied by these features.</p>
<h2>Materials</h2>
<p>Of course, most of these materials were made from scratch.</p>
<ul>
<li>
<p><strong>Backgrounds</strong> were mostly used in the first half of this tiebreaker, where nothing much was happening in the perspective of Index, except for ambient changes. As a result, I chose to simply alter the colors for the background used in the beatmap itself, with relevance to the mood of the music at every chapter. <strong>Beginnings</strong> felt like a relatively harsh snowstorm, hence the use of a strong cyan blue; <strong>Uncertainty</strong> makes reference to the monochromatic vision and violence outbreaks, thus the interchange between a greyscale and a blood red background. <strong>Progress</strong> used a relatively brighter tone that seemed to let the light flood in, as a signal of hope and discovery.</p>
</li>
<li>
<p><strong>Quotes and User Interface</strong>: As planned out in the segmentation of Chapters and Mapper Names, we just had to plan on where to place our user interface. There were a lot of issues with this, from HowToPlayLN and my understanding of how our previous storyboard for Last Wish came about.</p>
</li>
</ul>
<p>Storyboarding in mania is just that much more difficult, because the playfield for every player not only varies by column size, but also by position on the screen. After a little discussion, we decided that the ideal place to have the User Interface would be somewhere below the accuracy and score details that is typically fixated on the top right hand corner of the screen, if they were not situated right in the playfield. This is because we could then assume that not many people place their playfields at the right end of the screen, and it was safe to think that the User Interface would be viewable.</p>
<p>The ideas fleshed out in the previous section was implemented on the storyboard based on start and end timestamps for each chapter and each mapper in this <a href="https://media.discordapp.net/attachments/512920101423415306/1083681268887207976/image.png">manner</a>. It's a little fancy but still clear enough to indicate each part and each mapper, so it does what it has to do.</p>
<ul>
<li><strong>Other Assets</strong>: Other assets in the later half of the storyboard, such as the blue stars (actually made by DannyPX), the blue and red orbs were also made, with a focus on color gradient. Fortunately Figma provides a very large range of tools and guides for designers, which I managed to find by a single Google.</li>
</ul>
<p><a href="https://www.figma.com/file/bLhH9gHqPkQickOB5Lt9Z0?node-id=31:97&amp;comments-enabled=1&amp;viewer=1">Here</a> is the original copy of the Figma board we used to generate all backgrounds and sprites, including some pages that also include the banners I made for this tournament (and some unused ones, mostly improvisatory). Feel free to take a look at them if you would like!</p>
<h2>Flashing and Backgrounds</h2>
<p>As much as there are some issues with strobing lights and effects, the black blinks and white flashes were very important aspects of the storyboard too. Generally, I used them for switches in backgrounds in the transition from the introduction to Beginnings, and the transition into Uncertainty for example. They were used to convery the intensity of various beats, and to emulate various lightings as imagined.</p>
<ul>
<li><strong>Black/White flashes, and other background features</strong>: Throughout the whole process, I had implemented some functions that would help me create a sprite of whatever background I was planning to use. Here is an example of the code implemented in a layer script named AllBackgrounds.cs:</li>
</ul>
<pre><code class="language-cs">public void whiteFill(int StartTime, int EndTime, double startOpacity, double endOpacity) 
    {
        // create white image, flash it before fading out fast 
        var white = GetLayer(&quot;white&quot;).CreateSprite(&quot;sb/backgrounds/white.png&quot;, OsbOrigin.Centre);
            
        white.Fade(StartTime, EndTime, startOpacity, endOpacity);
    }
</code></pre>
<p>Now, in my original implementation, polymorphism was never used to simplify the scripting in the driver method that would animate all the backgrounds, so I found myself having a little bit of a tough time, having to redefine every single method that used a new background. Having just taken an OOP class, I've found out that it's always better if you can generalize these flashes down to a singular parent class (Transition, for example) which then is inherited by various flashes/backgrounds used in this project.</p>
<p>Here is another silly thing that resulted from the need to place numerous flashes. I spent about 2 days implementing all of <a href="https://media.discordapp.net/attachments/512920101423415306/1083693505945288734/image.png">this</a>, which probably almost beats the point of coding.</p>
<ul>
<li><strong>Some of the really fast blinking flashes</strong>: I had a little help from HowToPlayLN to implement some of the faster blinks corresponding to the kicks in the music, especially in the last 4 measures of Essence, reason being that the bpm was getting too fast for me to actually type out by hand.</li>
</ul>
<p>There was a definite way to work around this, of course. What was done then, was to define a new method that would use a method similar to the background filler that would generate black-colored flashes if given a list of timestamps with every single kick I wanted a blink on. This was done via a looping process which fortunately wasn't very computationally expensive due to the small amount of data required:</p>
<pre><code class="language-cs">public void KickBlackFlash(double opacity) 
    {
        var black = GetLayer(&quot;black&quot;).CreateSprite(&quot;sb/backgrounds/black.png&quot;, OsbOrigin.Centre);
        var flashtimes = new List&lt;int&gt;() 
        {
            ...all timestamps
        };

            // loop through each timestamp and add the black
            for (int i = 0; i &lt; flashtimes.Count - 1; i++) {
                int start = flashtimes[i];
                int end = flashtimes[i+1];
                int diff = end - start;
                
                if (diff &lt; 200) { // parse SB flash between the timestamps. If &gt;200ms it likely doesnt need a flash.
                    black.Fade(start, end, opacity, 0);
                }
            }
        }

</code></pre>
<p>Note some really challenging parts of defining this function:</p>
<ul>
<li>
<p>To obtain all the timestamps required, I had HowToPlayLN actually chart each of the kicks I wanted to apply a blink effect onto, with single streams, output a Python dictionary with all the timestamps that included a note in the reference difficulty and send a text version to me. I then directly copied the list into my list of integers and ran the magic.</p>
</li>
<li>
<p>Additionally, I also had to determine the longest duration of a flash I wanted to animate, because animating a really long flash between 2 timestamps that should not have one due to the loop could block out the whole storyboard. After some close inspection of the timeframe between each kick I wanted a blink on, the longest timeframe was about 190ms. Thus, I generalized the threshold timestamp difference to be 200, and any pair of adjacent timestamps that were more than 200ms apart would be ignored in the loop.</p>
</li>
</ul>
<h2>Beginnings</h2>
<h3>Reverse Snow (wons)</h3>
<p>The effect you saw in the first part is the reverse snow, which also appeared in the <strong>Cryochemistry</strong> tiebreaker, the 4DM4 Custom Song. The idea was to rewind the event <em>Symperasma Boreatica</em> and commemorate the 4 Digit MWC 4.</p>
<p>The way to create it is to create a loop consists of the snow moving reverse from the bottom left to the top right in a random speed. For the way to control how the snow (or wons) work is to define the angle for them, then use the <strong>rotation matrix</strong> in two dimensions defined as:</p>
<pre><code>[cos(x) -sin(x)
sin(x) cos(x)]
</code></pre>
<p>This matrix will rotate the objects counterclockwise with the angle <code>x</code>. So this way you can control our snow effects as our desire.</p>
<h2>Uncertainty</h2>
<h3>Bullet Rain</h3>
<p>The rain you saw in the second part, <strong>uncertainty</strong>, was generated from the midi file we transferred each other while composing a song.</p>
<p>Here we used <a href="https://pypi.org/project/py-midicsv/">py-midicsv</a> library to help with midi. The general idea of this library is to transform the midi file (which was binary) into the csv format, that still needed some cleanups but less pain than parsing the midi file from scratch.</p>
<p>We then obtain each pitch timestamp from the midi of the piano, then mapped to the position where the rain should drop, i.e. the lower pitches go to the left, and higher pitches go to the right.</p>
<p>Talking about it, this feature will be implemented in <strong>pystoryboard</strong> as well! More details coming soon.</p>
<h2>Ascendance</h2>
<p>The storyboard for <strong>Ascendance</strong> and <strong>Essence</strong> parts were made from pure black screen, with only particles and necessary background effects were used.</p>
<p>Or, in other words, we <strong>made the storyboard from scratch</strong>. This requires a lot of computations for the particles effects, the first example we can see is the usage of <strong>Generalized Poisson Queueing Model Discrete Event Simulation</strong> (don't worry it's not that hard, technically it's just some basic arhimetics and RNGs)</p>
<h3>Buildup: Generalized Poisson Queueing Model</h3>
<p>Here, in the buildup, we used the <strong>M/M/1 Queueing Model</strong> to generate the stars, to be precise <strong>Generalized Poisson Queueing Model with 1 server</strong>.</p>
<p>Talking about <strong>M/M/1</strong>, the first <strong>M</strong> defines the probability distribution of the arrival time, which in this case, it is <strong>Exponentially Distributed</strong>, the second <strong>M</strong> defines the probability distribution of the service time, which in this case it is also <strong>Exponentially Distributed</strong>. The <strong>1</strong> defines the number of servers, which in this case, there is only one server.</p>
<p>We can define <strong>arrival event</strong> to be the event that the star appears, and the <strong>departure event</strong> to be the event that the star disappears.</p>
<h3>First Drop: Customized Discrete Event System</h3>
<p>For the ascendance, first drop, we used the Simulation of <strong>Queueing System</strong>, to be precise, <strong>M/D/inf</strong> Queueing Model. The idea is we &quot;queue&quot; the stars to the screen, which acts like the &quot;shop&quot; or &quot;server&quot;.</p>
<p>As the screen has the infinite space, it can receive the infinite amount of customers (stars) at the same time. So we care only the expected arrival time, and the service time of the stars.</p>
<p>We define the arrival event to be the event when the star appears, and departure event to be the even when the star disappears.</p>
<p>The arrival time is exponentially distributed, that means that it has the memoryless property that it is independent on the time the last star arrived, as well as the chance of it arrives slower is less also.</p>
<p>The departure time is, constant, we set it to some number such that it ascends fast enough.</p>
<h3>Breakcore Midi</h3>
<p>For this part, we actually used the midi file again. This time, we mapped all of the instruments, including the breakcore drums, and other instruments takehirotei game to us. Mapping the midi into the storyboard actually created some chaos giving that it is the part with complex rhythms. For each event in midi, we created the little rotation effect to the stars, and using the scales to make them appear and disappears. We also reset the effects every 2 time signature changes (2 measures).</p>
<h3>Helix</h3>
<p>These helices spade from the lead melody in the part, for each helix we created a pair of stars. For this one, we separate the moving up effect from moving left and right to use the built-in easing from osu!</p>
<p>In osu!, easing 17 in Move means they move like a <strong>Sine Wave</strong>, which is the essence of these helices. (so we do not need to create the effects from scratch)</p>
<p>We used the sine wave easing to do the moving back and forth horizontally from the center, with some certain radius, following the melody. As well as using the effect from the first drop to emphasize the speed of the track.</p>
<h2>Essence</h2>
<h3>3D Partcles and Plexus</h3>
<p>Wondering how did I create the 3D particles like this?</p>
<p><img src="https://cdn.discordapp.com/attachments/546525809440194560/1076380645024083998/screenshot1906.jpg" alt=""></p>
<p>Well of course I randomized the position of the stars in 3D, then define the camera to go through the space, but how did we get the 2D positions and size from the objects and camera?</p>
<p>The answer is, this piece of code</p>
<pre><code class="language-py">import numpy as np
from numpy import sin, cos
from numpy.linalg import inv

class Camera:
    def __init__(self, position=(0,0,0), rotation=(0,0,0)):
        self._position = position
        self._rotation = rotation
    
    @property
    def position(self):
        return self._position
    
    @property
    def rotation(self):
        return self._rotation
    
    @position.setter
    def position(self, new_position):
        self._position = new_position
    
    @rotation.setter
    def rotation(self, new_rotation):
        self._rotation = new_rotation
    
    @property
    def rotation_matrix(self):
        theta, phi, psi = self.rotation
        rx = np.array([[1,0,0], [0,cos(theta),-sin(theta)], [0,sin(theta),cos(theta)]])
        ry = np.array([[cos(phi),0,-sin(phi)], [0,1,0], [sin(phi),0,cos(phi)]])
        rz = np.array([[cos(psi),-sin(psi),0], [sin(psi),cos(psi),0], [0,0,1]])
        return rx @ ry @ rz
    
    def transform(self, object_position: tuple):
        x, y, z = object_position
        x_cam, y_cam, z_cam = self.position
        relative_pos = np.array((x - x_cam, y - y_cam, z - z_cam)).reshape(-1, 1)
        inv_size, x_2d, y_2d = (inv(self.rotation_matrix) @ relative_pos).flatten()
        if inv_size &lt;= 0:
            return (0,0), 0

        size = 1 / inv_size
        return (x_2d, y_2d), size
</code></pre>
<p>The code looks a bit messy, but the idea is we have the property of rotation and position of the camera in x, y and z axis. The way to obtain the 2D position of the object according to the camera is to <strong>inverse transform</strong> the camera and all the objects, such that the camera is at the origin, (0,0,0) and the rotation is default (no rotation).</p>
<p>We can obtain that by subtracting the object position by the camera position, then inverse the rotation matrix, which finally we can obtain the more simple property for finding the size and the position of the particles.</p>
<p>In the <code>transform</code> method, the x position represents the inverse of size, meanwhile y and z position represent the position in a 2D plane. We then pass the parameters back to our storyboard.</p>
<p>Next, how do we create the plexus like this?</p>
<p><img src="https://cdn.discordapp.com/attachments/546525809440194560/1076383795088986262/screenshot1907.jpg" alt=""></p>
<p>This is another level from the 3D objects, but the plexus line does not require the 3D transformation like the objects, but rather using the technique inspired from the <strong>1-NN (1-Nearest Neighbour)</strong>.</p>
<p>I obtained the plexus line from the Essence GFX, create the method to obtain the Nearest Neighbour. To connect the line between the object to the nearest neighbour, we first transform them into 2D planes first, then we calculate the line size, line position and rotation using <strong>Polar Coordinates</strong>. This is how we can obtain the plexus.</p>
<p>Well, there is one more scene that required the use of 3D Objects, which is this scene where the stars orbit the orb.</p>
<p><img src="https://cdn.discordapp.com/attachments/546525809440194560/1076386525442494514/screenshot1908.jpg" alt=""></p>
<p>How do we calculate the position of each frame exactly?</p>
<p>We can look at this piece of code in the OrbRotation class:</p>
<pre><code class="language-py">def object_rotation(self, coord0: tuple, center_point: tuple, alpha: float, beta: float, gamma: float):
    def rot_t(t):
        x0, y0, z0 = coord0
        xc, yc, zc = center_point
        relative_coord = (x0 - xc, y0 - yc, z0 - zc)
        ri, thetai, zi = cartesian_to_cylindrical(*relative_coord)
        rt = ri * exp(-alpha * t)
        thetat = beta * t + thetai
        zt = zi * exp(-alpha * t) * cos(gamma * t)
        xt, yt, zt = cylindrical_to_cartesian(rt, thetat, zt)
        return (xt + xc, yt + yc, zt + zc)
    return rot_t
</code></pre>
<p>We started from the initial coordination <code>coord0</code>, then make it rotate around the center point (the orb) with making it exponentially closer to the center point. We use the cylindrical coordinates to obtain such positions. r defines the radius around the z axis, theta defines the rotation and z defines the z position. We then multiply the r and z with exponential function, such that they come closer to the center point. For the z position, we want it to rotate between negative and positive which cos function were added for this task, meanwhile we make the theta a linear function to make it a constant rotation. It would yield something like this with a single object. (Note that the green point is the initial point.)</p>
<p><img src="https://cdn.discordapp.com/attachments/546525809440194560/1076389385513214012/output.png" alt=""></p>
<p>If you are interested in more details regarding 3D Projection, I highly recommend you to check out <a href="https://youtu.be/scpzKIe6iZw">this video</a>. It has a really good explanation with the visuals, as well as how come the mathematical formulas behind it.</p>
<p>This will also be implemented in <strong>pystoryboard</strong> in the future, and it will be a lot easier to use! But due to some storyboard constraints, it only supports the 0D (point-like) and 1D (lines) storyboard with frame-by-frame rendering for now.</p>
<h3>Constellation Graph</h3>
<p><img src="https://cdn.discordapp.com/attachments/546525809440194560/1082222453247459359/image.png" alt=""></p>
<p>This constellation graph was actually pre designed in the <a href="https://www.figma.com/file/QV5ZMnCBEo1lS3uReb5f1F/Media-Centre-Infrastructure?node-id=0%3A1&amp;t=eQYrDujjeJlF9BGq-1">FigJam board</a>. Here, we manually obtained the positions of the constellations and then scale them into the storyboard. For this particular graph, it is actually a <strong>binary tree</strong> in disguise, we then plot all of the connections into a dictionary or a key-value formatting, including the time that each point will appear, starting from the first dot to second dot to other dots.</p>
<h3>Splitting Screen</h3>
<p><strong>Fair Warning: This algorithm takes a lot of SB Load, if your device is not strong enough I do not recommend using this effect.</strong></p>
<p>The idea for this one is really easy, but it is actually easier said than done.</p>
<p>The initial idea is to shrink down the effects in the one screen, and copy paste in all the divisions of n x n portions in the screen.</p>
<p>In order to do this technically, we need to</p>
<ul>
<li>Get all of the events from the objects</li>
<li>Normalize all of the positions into the range 0 to 1</li>
<li>For all of the divisions on the screen, do the following:
<ul>
<li>Shrink all of the scaling events by the scaling of n</li>
<li>Move all of the moving events to each portion according to the normalized positions</li>
</ul>
</li>
</ul>
<p>For 4x4 screen in the actual storyboard, it took <strong>30.57x SB Load</strong> for the effect, and decreased down the FPS (Frame Per Second) of the game to 20fps (source: my device). Hence, use this with the grain of salt.</p>
`;export{e as attributes,t as html};
