import React from 'react';
import { Image, ScrollView, Text, StyleSheet, View, YouTube } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  textStyleOne: {
    color: 'orange',
    fontSize: 20
  },
  textStyleTwo: {
    color: 'lime',
    fontSize: 40
  },
  textStyleThree: {
    color: 'blue',
    fontSize: 40
  }
});

export default App = () => (
  <View style={styles.container}>

    <Text style={styles.textStyleOne}>HELL YEA BOI ANIME ALL DAY!!!</Text>
    <ScrollView >
      <Image source={require('./Fairy.jpg')} style={{ width: 360, height: 500 }} />
      <Text style={styles.textStyleThree}>Fairy Tail</Text>
      <Text>Fairy Tail (Japanese: フェアリーテイル, Hepburn: Fearī Teiru) is a Japanese manga series written and
      illustrated by Hiro Mashima. It was serialized in Kodansha's Weekly Shōnen Magazine from August 2, 2006 to
      July 26, 2017, with the individual chapters collected and published into 63 tankōbon volumes. The story
      follows the adventures of Natsu Dragneel, a member of the popular wizard guild Fairy Tail, as he searches
      the fictional world of Earth-land for the dragon Igneel. The manga has been adapted into an anime series
      produced by A-1 Pictures, Dentsu Inc., Satelight, Bridge, and CloverWorks which began broadcasting in Japan
      on October 12, 2009. Additionally, A-1 Pictures has developed nine original video animations and two
      animated feature films. The series ended its initial run on March 30, 2013. A second series premiered on
      TV Tokyo on April 5, 2014, and ended on March 26, 2016. A third and final series aired from October 7, 2018
      to September 29, 2019. The series has also inspired numerous spin-off manga, including a sequel
          storyboarded by Mashima, titled Fairy Tail: 100 Years Quest, which launched on July 25, 2018.</Text>
      <Image source={require('./ken.jpg')} style={{ width: 360, height: 400 }} />
      <Text style={styles.textStyleTwo}>Tokyo Ghoul</Text>
      <Text>Tokyo Ghoul (Japanese: 東京喰種トーキョーグール, Hepburn: Tōkyō Gūru) is a Japanese dark fantasy manga
      series written and illustrated by Sui Ishida. It was serialized in Shueisha's seinen manga magazine Weekly
      Young Jump between September 2011 and September 2014, and it has been collected in fourteen tankōbon volumes
      as of August 2014. A sequel titled Tokyo Ghoul:re was serialized in the same magazine between October 2014
      and July 2018, and was later collected into sixteen tankōbon volumes. A prequel titled Tokyo Ghoul [Jack]
      ran online on Jump Live. A 12-episode anime television series adaptation by studio Pierrot aired on Tokyo
      MX between July 4, 2014, and September 19, 2014. A 12-episode second season, Tokyo Ghoul √A (pronounced
      Tokyo Ghoul Root A), which follows an original story, began airing on January 9, 2015, and concluded on
      March 27, 2015. In North America, Viz Media is publishing the manga while Funimation has licensed the
      anime series for streaming and home video distribution. A live-action film based on the manga was
      released in Japan on July 29, 2017. An anime adaptation based on the sequel manga Tokyo Ghoul:re began
      airing from April 3, 2018, and concluded on December 25, 2018, with the series being split into two seasons.</Text>

      <Image source={require('./FoodWars.jpg')} style={{ width: 360, height: 500 }} />
      <Text style={styles.textStyleTwo}>Food Wars!: Shokugeki no Soma</Text>
      <Text>Food Wars!: Shokugeki no Soma (Japanese: 食戟のソーマ, Hepburn: Shokugeki no Sōma, lit.
      "Sōma of the Shokugeki") is a Japanese shōnen manga series written by Yūto Tsukuda and illustrated by
      Shun Saeki. Yuki Morisaki also works as a Contributor, providing the recipes for the series. Individual
      chapters have been serialized in Weekly Shōnen Jump from November 2012 and concluded in June 2019.
      A total of 36 tankōbon volumes were released by Shueisha in Japan. The series is licensed by Viz Media
      for the American and Western market, who has been releasing the volumes digitally since March 18, 2014,
      and released the first volume in print on August 5, 2014.
      An anime adaptation by J.C.Staff aired between April 3 and September 25, 2015. A second season named Food Wars!
      The Second Plate aired between July 2 and September 24, 2016. The first cour of the third season, referred to as
      Food Wars! The Third Plate aired between October 4 and December 20, 2017. The second half aired between April 9
      and June 25, 2018. A fourth season entitled Food Wars! The Fourth Plate aired between October 12 and December 28,
 2019. The fifth and final season premiered on April 11, 2020.</Text>
      <Image source={require('./SAO.jpg')} style={{ width: 360, height: 400 }} />
      <Text style={styles.textStyleThree}>SAO</Text>
      <Text>Sword Art Online (Japanese: ソードアート・オンライン, Hepburn: Sōdo Āto Onrain) is a Japanese light novel
      series written by Reki Kawahara and illustrated by abec. The series takes place in the near future and
      focuses on protagonist Kazuto "Kirito" Kirigaya and Asuna Yuuki as they play through various virtual reality
      MMORPG worlds. Kawahara originally wrote the series as a web novel on his website from 2002 to 2008. The
      light novels began publication on ASCII Media Works' Dengeki Bunko imprint from April 10, 2009, with a
      spin-off series launching in October 2012. The series has spawned nine manga adaptations published by
      ASCII Media Works and Kadokawa. The novels and seven of the manga adaptations have been licensed for
      release in North America by Yen Press. An anime television series produced by A-1 Pictures, known simply
      as Sword Art Online, aired in Japan between July and December 2012, with a television film Sword Art
      Online: Extra Edition airing on December 31, 2013, and a second season, titled Sword Art Online II,
      airing between July and December 2014. An animated film titled Sword Art Online The Movie: Ordinal Scale
      featuring an original story by Kawahara premiered in Japan and Southeast Asia on February 18, 2017, and
      was released in the United States on March 9, 2017. A spin-off anime series titled Sword Art Online
      Alternative Gun Gale Online premiered in April 2018, while a third season titled Sword Art Online:
      Alicization premiered in October 2018. A live-action series will be produced by Netflix. Six video
      games based on the series have been released for multiple consoles.

</Text>

      <Image source={require('./lagann.png')} style={{ width: 360, height: 400 }} />
      <Text style={styles.textStyleTwo}>Gurren Lagann</Text>
      <Text>Gurren Lagann, known in Japan as Tengen Toppa Gurren Lagann (天元突破グレンラガン, Tengen Toppa Guren
      Ragan, lit. "Pierce the Heavens, Gurren Lagann"), is a Japanese mecha anime television series animated by
      Gainax and co-produced by Aniplex and Konami. It ran for 27 episodes on Japan's TV Tokyo between April 1,
      2007, and September 30, 2007. It was directed by Hiroyuki Imaishi, written by veteran playwright Kazuki
      Nakashima, both of whom would later collaborate on two more projects, Kill la Kill in 2013 and Promare in
      2019, and had been in development since the participation of the famed animator in the Abenobashi
      mecha-themed episodes by the same studio. Gurren Lagann takes place in a fictional future where Earth is
      ruled by the Spiral King, Lordgenome, who forces mankind to live in isolated subterranean villages.
      The plot focuses on two teenagers, Simon and Kamina, who live in a subterranean village and wish to go
      to the surface. Using a mecha known as Lagann, Simon and Kamina reach the surface and start fighting
      alongside other humans against Lordgenome's forces, before fighting the forces of their true enemy.
      In North America, although initially announced to be licensed by ADV Films in 2007, the license was transferred
      to Bandai Entertainment in 2008[4] and then transferred to Aniplex of America in 2013. In the United Kingdom, it
      was licensed by Manga Entertainment in 2007, then transferred to Beez Entertainment in 2008, and then transferred
      to Anime Limited in 2013. The Sci Fi Channel acquired the broadcasting rights of Gurren Lagann and began airing
      the anime on July 28, 2008, as part of Sci Fi's Ani-Monday anime block.[5][6] The anime won several awards at the
 Tokyo International Anime Fair[7] and the Animation Kobe[8] and Japan Media Arts Festivals.[9]</Text>
      <Image source={require('./Kenichi.jpg')} style={{ width: 360, height: 700 }} />
      <Text style={styles.textStyleThree}>Kenichi the Mightiest Disciple</Text>
      <Text>The story focuses on Kenichi Shirahama, a 15-year-old high school student and a long-time victim of
      bullying. At the beginning of the story, he befriends transfer student Miu Fūrinji; and desires to become
      stronger, he follows her to Ryōzanpaku, a dojo housing several masters of diverse martial arts, led by her
      grandfather Hayato Fūrinji. After learning basics from Miu, Kenichi overcomes a high-ranking member of the
      school's karate club, and becomes a target for all the delinquents in the school. While initially training
      to protect himself, Kenichi eventually becomes a full disciple of Ryōzanpaku, and becomes enamored of Miu.
      Subsequently, Kenichi's daily routine is divided between training under the six masters of Ryōzanpaku, and
      his fights against the members of 'Ragnarok', a gang of bullies trying alternately to recruit or to vanquish
      him. After Ragnarok is disbanded, Kenichi and Miu are targeted by Yomi, a group of disciples personally
      trained by a master of an organization rivaling Ryōzanpaku, Yami. While the masters of Ryōzanpaku and their
      allies follow the principle of always sparing their opponents' lives (Katsujin-ken), the members of Yami
      believe that any means of defeating an opponent is valid, including murder (Satsujin-ken). In the struggle
      between the two factions, Kenichi, Miu, and their allies fight the members of Yomi, while his masters
      confront the members of Yami. The conflict between the two factions culminate with the final battle to stop
      Yami's main objective, which is to usher a new era of chaos and warfare in the world, also known as
      "The Eternal Sunset". Once the Eternal Sunset is prevented and their main leader is defeated, Yami and Yomi
      are disbanded as well. Kenichi then continues to train at Ryōzanpaku, and years later he becomes a famous
      novelist, but it's hinted that he also becomes Miu's husband and a martial arts master more powerful than her
      grandfather, the Elder, who had always sworn he would only allow Miu to marry someone capable of defeating him
        first.</Text>

      <Image source={require('./Fruit.jpg')} style={{ width: 360, height: 500 }} />
      <Text style={styles.textStyleTwo}>Fruits Basket</Text>
      <Text>Fruits Basket (Japanese: フルーツバスケット, Hepburn: Furūtsu Basuketto), sometimes abbreviated Furuba or Fruba (フルバ), is a Japanese shōjo manga series written and illustrated by Natsuki Takaya. It was serialized in the semi-monthly Japanese magazine Hana to Yume, published by Hakusensha, from 1998 to 2006. The series' title comes from the name of a popular game played in Japanese elementary schools, which is alluded to in the series.
      Fruits Basket tells the story of Tohru Honda, an orphan girl who, after meeting Yuki, Kyo, and Shigure Sohma, learns that twelve members of the Sohma family are possessed by the animals of the Chinese zodiac (十二支, Jūnishi) and are cursed to turn into their animal forms when they are weak, stressed, or when they are embraced by anyone of the opposite sex that is not possessed by a zodiacal spirit. As the series progresses, Tohru learns of the hardships and pain faced by the afflicted Sohmas, and through her own generous and loving nature, helps heal their emotional wounds. As she learns more about Yuki, Kyo, and the rest of the mysterious Sohma family,
      Tohru also learns more about herself and how much others care for her.The series was also adapted into a
      26-episode anime series in 2001, directed by Akitaro Daichi. A new anime television series adaptation produced
       by TMS Entertainment and directed by Yoshihide Ibata premiered on April 2019, which will adapt the entire manga. The first season of the 2019 reboot was 25 episodes long. The second season premiered on April 6, 2020. The reboot anime series is a co-production of Funimation,[5] who released the series through Crunchyroll-Funimation partnership.</Text>
      <Image source={require('./Parasyte.jpg')} style={{ width: 360, height: 400 }} />
      <Text style={styles.textStyleThree}>Parasyte</Text>
      <Text>Parasyte (Japanese: 寄生獣, Hepburn: Kiseijū, lit. "Parasitic Beasts") is a Japanese science fiction horror manga series written and illustrated by Hitoshi Iwaaki and published in Kodansha's Morning Open Zōkan and Monthly Afternoon magazine from 1988 to 1995. The manga was published in North America by first Tokyopop, then Del Rey, and finally Kodansha Comics.
      The manga has been adapted into two live-action films in Japan in 2014 and 2015 respectively. An anime television series adaptation by Madhouse, titled Parasyte -the maxim- (寄生獣 セイの格率, Kiseijū Sei no Kakuritsu), aired in Japan between October 2014 and March 2015. The English-language dub aired on Adult Swim's Toonami block in America between October 2015 and April 2016.
Parasyte won the Kodansha Manga Award for the general category in 1993 and the Seiun Award for best manga in 1996. As of October 2014, the manga had over 11 million copies in print.</Text>



    </ScrollView>
  </View>
);
