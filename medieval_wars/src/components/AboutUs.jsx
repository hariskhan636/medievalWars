import styles from "../style";

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col justify-between items-center w-full"
    >
      <h2 className={`${styles.heading2}`}>About Us</h2>

      <p
        className={`${styles.paragraph} mt-2 mb-5 text-justify text-[15px] leading-[26px]`}
      >
        The game features one on one contests. Players will be able to select a
        civilization of their choice before the game begins. Each civilization
        will have its unique bonuses and perks. The game will then begin and
        players will be positioned opposite to their opponent in the corner of
        the map. A three-minute preparation time will be given to each player in
        which they can gather resources, assemble their armies and plan their
        strategy. A wall will separate the two sides which will be demolished
        automatically on the three- minute mark. During the preparation time,
        players will have a limited number of resources (gold, wood, coal, etc.)
        to deploy units of on their half of map or workers to mine more
        resources as the battle progresses. Players will also have the freedom
        to place defense units on the map or prepare a combination of attack and
        defense. They can also plan their worker units with the help of initial
        resources allotted during the preparation time. After that, the players
        will be able to attack each other with their units. The game will offer
        three types of units: Melee, Ranged and Cavalry, with each type having
        subtypes. Creating units will cost players resources which they will
        need to manage throughout the course of the contest. A special type of
        non-combat units called the worker units will perform a variety of tasks
        including hunting for food, chopping trees to gather wood and mining
        gold and coal from the mines located in the vicinity of map. The
        resources will allow the players to field attack and defense units on
        the battlefield. The objective of the game will be to destroy the
        opponent’s ‘Landmark’ building. As the game progresses, items will be
        spawned at intervals in the center of the map which will give additional
        stats to the units of whichever player picks them. This will motivate
        players to go higher up the map in order to improve their army and gain
        an advantage. However, it might leave their Landmark vulnerable if the
        player is not careful enough. Each unit will have LOS (Line of Sight)
        which will enable player to observe the map. Players can also build
        outposts throughout the map to gain additional LOS and possibly gain an
        advantage over the enemy by having a better vision of the playing field.
      </p>
    </div>
  );
};

export default AboutUs;
